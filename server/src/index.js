const { ApolloServer, gql } = require('apollo-server');
require("dotenv").config();
const port = process.env.APOLLO_SERVER_PORT || 8000;

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
      books: () => books,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(port).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});