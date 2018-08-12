import gql from 'graphql-tag'

export const allRooms = gql`
query {
  getRooms {
    id
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
    id
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
    id
    roomNumber
    owner
    user {
      id
      username
    }
  }
}
`;

export const updateRoom = gql`
mutation($id: Int!, $owner: Int!) {
  updateRoom(id: $id, owner: $owner)
}
`;