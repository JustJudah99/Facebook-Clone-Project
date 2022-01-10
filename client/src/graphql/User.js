import { gql } from "@apollo/client"

export const LOGIN_USER = gql`
  mutation login($email: String!,$password: String!) {
    login(
      email: $email,
      password: $password
    ) {
      token,
      userLevel,
      login
    }
  }
`

export const REGISTER_USER = gql`
  mutation addUser(
    $name: String!,
    $lastname: String!
    $email: String!,
    $password: String!,
    $dayOfBirth: Int!,
    $monthOfBirth: Int!,
    $yearOfBith: Int!
    $sexId: Int!,
    $sexType: String!
  ) {
    addUser(
      registerInput: {
        name: $name,
        lastname: $lastname,
        email: $email,
        password: $password,
        birth: {
          day: $dayOfBirth,
          month: $monthOfBirth,
          year: $yearOfBith,
        }
        sex: {
          sexId: $sexId,
          sexType: $sexType
        }
      }
    ) {
      msg
    }
  }
`