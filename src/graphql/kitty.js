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
    $month: String
  ) {
    createKittyStatement(
    date: $date
    counterParty: $counterParty
    reference: $reference
    type: $type
    amount: $amount
    balance: $balance
    openingBalance: $openingBalance
    month: $month
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
      month
    }
  }
`;

export const getKittyStatementsByMonth = gql`
  query getKittyStatementsByMonth($month: String!) {
    getKittyStatementsByMonth(month: $month) {
      date
      counterParty
      reference
      type
      amount
      balance
    }
  }
`;