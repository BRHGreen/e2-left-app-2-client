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
        id
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
export const updateUserProfile = gql`
mutation(
  $id: Int!,
  $newAge: Int,
  $newOccupation: String,
  $newInterests: String,
  $newBio: String,
) {
  updateUserProfile(
    id: $id,
    newAge: $newAge,
    newOccupation: $newOccupation,
    newInterests: $newInterests,
    newBio: $newBio,
  )
}
`;