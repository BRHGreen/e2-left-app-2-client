import gql from 'graphql-tag'

export const allCupboards = gql`
query  getCupboards {
  getCupboards {
    id
    landMass
    cupboardNumber
    owner
    user {
      username
      id
    }
  }
}
`;

export const getMainlandWestCupboards = gql`
query  getMainlandWestCupboards {
  getMainlandWestCupboards {
    id
    landMass
    cupboardNumber
    user {
      username
      id
    }
  }
}
`;

export const getMainlandEastCupboards = gql`
query  getMainlandEastCupboards {
  getMainlandEastCupboards {
    id
    landMass
    cupboardNumber
    user {
      username
      id
    }
  }
}
`;

export const updateOwner = gql`
mutation($id: Int!, $owner: Int!) {
  updateKitchenCupboard(id: $id, owner: $owner)
}
`