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
    }
  }
}
`;

export const updateOwner = gql`
mutation($id: Int!, $owner: Int!) {
  updateKitchenCupboard(id: $id, owner: $owner)
}
`