import gql from 'graphql-tag'

export const allCupboards = gql`
query  getCupboards {
  getCupboards {
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
    landMass
    cupboardNumber
    user {
      username
    }
  }
}
`;

export const updateOwner = gql`
mutation($id: Int!, $newOwner: Int!) {
  updateKitchenCupboard(id: $id, owner: $newOwner )
}
`