import gql from 'graphql-tag'

export const getUtilities = gql`
query {
  getUtilities {
    id
    utilityType
    utilityNumber
    isOperational
    notes
  }
}
`;

export const updateUtility = gql`
mutation($id: Int!) {
  updateUtility(id: $id)
}
`;