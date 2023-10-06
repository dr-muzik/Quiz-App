import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
      user {
        username
        phone
        courses
        occupation
        email
        fullName
      }
      access_token
    }
  }
`;

export const SIGN = gql`
  mutation signup($input: SignupUserInput!) {
    signup(signupUserInput: $input) {
      username
      phone
      courses
      occupation
      email
      fullName
      id
    }
  }
`;
