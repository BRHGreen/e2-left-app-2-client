import React from 'react';
import { compose, graphql } from 'react-apollo';
import { getAllKittyStatements } from '../../graphql/kitty';

const Kitty = (props) => {
  const { getAllKittyStatements, loading } = props

  const keys = !getAllKittyStatements.loading && Object.keys(getAllKittyStatements.getAllKittyStatements[0]).filter(key => !key.includes('__'))
  
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
            {!getAllKittyStatements.loading && getAllKittyStatements.getAllKittyStatements.map((row, i) => keys && <tr key={i}> {keys.map((_, i) => <td key={i}>{row[keys[i]]}</td>)}
            </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default compose(
  graphql(getAllKittyStatements, {
    name: 'getAllKittyStatements'
  })
)(Kitty)