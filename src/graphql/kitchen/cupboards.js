import gql from 'graphql-tag'

export const allCupboards = gql`
query  getCupboards {
  getCupboards {
    landMass
    cupboardNumber
    owner
  }
}
`;

export const getMainlandWestCupboards = gql`
query  getMainlandWestCupboards {
  getMainlandWestCupboards {
    landMass
    cupboardNumber
  }
}
`;

export const getMainlandEastCupboards = gql`
query  getMainlandEastCupboards {
  getMainlandEastCupboards {
    landMass
    cupboardNumber
  }
}
`;