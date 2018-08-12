import gql from 'graphql-tag'

export const allRooms = gql`
query {
  getRooms {
    roomNumber
    owner
    floor
    user {
      id
      username
    }
  }
}
`;

export const topFloor = gql`
query {
  getTopFloor {
    roomNumber
    owner
    user {
      id
      username
    }
  }
}
`;

export const groundFloor = gql`
query {
  getGroundFloor {
    roomNumber
    owner
    user {
      id
      username
    }
  }
}
`;