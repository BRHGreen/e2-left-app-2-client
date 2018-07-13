import gql from 'graphql-tag'

export const allCupboards = gql`
query  getCupboards {
  getCupboards {
    landMass
    cupboardNumber
  }
}
`;

export const mainlandWestCupboards = gql`
query  getMainlandWestCupboards {
  getMainlandWestCupboards {
    landMass
    cupboardNumber
  }
}
`;

export const mainlandEastCupboards = gql`
query  getMainlandEastCupboards {
  getMainlandEastCupboards {
    landMass
    cupboardNumber
  }
}
`;