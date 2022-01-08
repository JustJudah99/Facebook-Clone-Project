import { ApolloServer, gql, UserInputError } from 'apollo-server';
import Dotenv from "dotenv";
Dotenv.config();
import resolvers from './graphql/resolvers.js';
import typeDefs from './graphql/typeDefs.js';
const port = process.env.APOLLO_SERVER_PORT || 8000;

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

server.listen(port).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});