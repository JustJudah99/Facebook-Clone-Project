import { gql } from 'apollo-server';

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