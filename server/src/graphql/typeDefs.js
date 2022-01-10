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
    lastname: String!
    email: String!
    password: String!
    birth: String!
    sex: String!
    id: ID!
    token: String!
    userLevel: String!
    login: Boolean!
    msg: String!
  }
  type Query {
    userCount: Int!
    allUsers: [User]
    findUser(name: String!): User
  }
  type Mutation {
    addUser(
      name: String!
      lastname: String!
      email: String!
      password: String!
      birth: String!
      sex: String!
    ): User
    login(email: String!, password: String!): User
  }
`

export default typeDefs