import { gql } from 'apollo-server';

const typeDefs = gql`
  enum YesNo {
    YES
    NO
  }

  type Message {
    msg: String!
  }

  type User {
    name: String!
    lastname: String!
    email: String!
    password: String!
    dayOfBirth: Int!
    monthOfBirth: Int!
    yearOfBith: Int!
    sex: String!
    id: ID!
    token: String!
    userLevel: String!
    login: Boolean!
    msg: String!
  }

  input Sex {
    sexId: Int!
    sexType: String!
  }

  input Date {
    day: Int!
    month: Int!
    year: Int!
  }

  input RegisterInput {
    name: String!
    lastname: String!
    email: String!
    password: String!
    birth: [Date]!
    sex: [Sex]!
  }

  type Query {
    userCount: Int!
    allUsers: [User]
    findUser(name: String!): User
  }
  type Mutation {
    addUser(registerInput: RegisterInput): Message
    login(email: String!, password: String!): User
  }
`

export default typeDefs