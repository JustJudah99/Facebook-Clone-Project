import { gql } from 'apollo-server';

const typeDefs = gql`
  enum YesNo {
    YES
    NO
  }
  type User {
    name: String!
    email: String!
    password: String!
    id: ID!
  }
  type Query {
    userCount: Int!
    allUsers: [User]
    findUser(name: String!): User
  }
  type Mutation {
    addUser(
      name: String!
      email: String!
      password: String!
    ): User
  }
`

export default typeDefs