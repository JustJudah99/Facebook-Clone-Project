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
    $birth: String!,
    $sex: String!
  ) {
    addUser(
      name: $name,
      lastname: $lastname,
      email: $email,
      password: $password,
      birth: $birth,
      sex: $sex
    ) {
      msg
    }
  }
`