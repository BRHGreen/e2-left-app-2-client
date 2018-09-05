import gql from 'graphql-tag'

export const createKittyStatement = gql`
mutation(
    $date: String,
    $counterParty: String,
    $reference: String,
    $type: String,
    $amount: Float,
    $balance: Float,
    $openingBalance: Float,
  ) {
    createKittyStatement(
    date: $date
    counterParty: $counterParty
    reference: $reference
    type: $type
    amount: $amount
    balance: $balance
    openingBalance: $openingBalance
    ) {
      ok
      errors {
        path
        message
      }
    }
  }
`

export const getAllKittyStatements = gql`
  query getAllKittyStatements {
    getAllKittyStatements {
      date
      counterParty
      reference
      type
      amount
      balance
    }
  }
`;