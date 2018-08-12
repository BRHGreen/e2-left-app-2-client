import gql from 'graphql-tag'

export const allRooms = gql`
query {
  getRooms {
    roomNumber
    owner
    floor
  }
}
`;

export const topFloor = gql`
query {
  getTopFloor {
    roomNumber
    owner
  }
}
`;

export const groundFloor = gql`
query {
  getGroundFloor {
    roomNumber
    owner
  }
}
`;