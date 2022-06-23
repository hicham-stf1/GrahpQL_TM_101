const express = require("express");
const port = process.env.PORT || 5000;
const schema = require("./schema/schema");
require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const { graphqlHTTP } = require("express-graphql");

const app = express();

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: (process.env.NODE_ENV = "development"),
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
