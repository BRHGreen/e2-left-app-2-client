import React from 'react';
import { compose, graphql } from 'react-apollo';
import { getKittyStatementsByMonth } from '../../graphql/kitty';

const Kitty = (props) => {
  const { getKittyStatementsByMonth, loading } = props
  console.log('getKittyStatementsByMonth', getKittyStatementsByMonth)
  const keys = !getKittyStatementsByMonth.loading && Object.keys(getKittyStatementsByMonth.getKittyStatementsByMonth[0]).filter(key => !key.includes('__'))
  
  console.log('keys', keys)

  return (
    loading ? null
    : <div className="page__container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {keys && keys.map((heading, i) => <th key={i}>{heading}</th>)}
          </tr>
        </thead>
        <tbody>
            {!getKittyStatementsByMonth.loading && getKittyStatementsByMonth.getKittyStatementsByMonth.map((row, i) => keys && <tr key={i}> {keys.map((_, i) => <td key={i}>{row[keys[i]]}</td>)}
            </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default compose(
  graphql(getKittyStatementsByMonth, {
    name: 'getKittyStatementsByMonth',
    options: {
      variables: { month: '07/2018' }
    }
  })
)(Kitty)