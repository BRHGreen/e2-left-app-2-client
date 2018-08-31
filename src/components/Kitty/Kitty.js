import React from 'react';
import { compose, graphql } from 'react-apollo';
import { getAllKittyStatements } from '../../graphql/kitty';

const Kitty = (props, { getAllKittyStatements: getAllKittyStatements }) => {
  console.log('getAllKittyStatements', getAllKittyStatements)
  console.log('props', props)
  return (
    <div className="page__container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>name</th>
            <th>genre</th>
            <th>release date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="active">
            <td>The Shawshank Redemption</td>
            <td>Crime, Drama</td>
            <td>14 October 1994</td>
          </tr>
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