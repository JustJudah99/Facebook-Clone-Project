const { ApolloServer, gql } = require('apollo-server');
require("dotenv").config();
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

const typeDefs = gql`
  type User {
    name: String!
    email: String!
    password: String!
  }
  type Query {
    userCount: Int!
    allUsers: [User]
  }
`


const resolvers = {
    Query: {
      userCount: () => User.length,
      allUsers: () => User
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(port).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});