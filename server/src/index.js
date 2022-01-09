import { ApolloServer } from 'apollo-server';
import mongoose from "mongoose";
import Dotenv from "dotenv";
Dotenv.config();
import resolvers from './graphql/resolvers/index.js';
import typeDefs from './graphql/typeDefs.js';
const port = process.env.APOLLO_SERVER_PORT || 8000;
const MONGO_URI = process.env.MONGODB;

const User = [
  {
    name: "Robert",
    email: "robert@admin.com",
    password: "12345678"
  },
  {
    name: "Brian",
    email: "brian@admin.com",
    password: "12345678"
  },
]

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(MONGO_URI, {useNewUrlParser: true})
  .then(() => {
    console.log("Database is connected");
    server.listen(port).then(({ url }) => {
      console.log(`Server ready at ${url}`);
    });
  })
  .catch(err => {
    console.error(err)
  })