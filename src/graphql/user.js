import gql from 'graphql-tag'


export const allUsers = gql`
query allUsers {
    allUsers {
      id
      username
    }
  }
`;

export const getUser = gql`
  {
    getUser {
      id
      username
      email
      userProfile {
        age
        occupation
        interests
        bio
      }
    }
  }
`;

export const loginMutation = gql`
mutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        ok
        token
        refreshToken
        errors {
          path
          message
        }
      }
    }`;
export const registerMutation = gql`
mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }`;

export const updateUser = gql`
mutation($id: Int!, $newUsername: String) {
  updateUser(id: $id, newUsername: $newUsername)
}
`;