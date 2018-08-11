import gql from 'graphql-tag'

export const allRooms = gql`
query {
  getRooms {
    roomNumber
    owner
  }
}
`;