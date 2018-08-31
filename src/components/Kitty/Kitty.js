import React from 'react';
import { compose, graphql } from 'react-apollo';
import { getAllKittyStatements } from '../../graphql/kitty';

const Kitty = (props, { getAllKittyStatements }) => {
  console.log('getAllKittyStatements', getAllKittyStatements)
  console.log('props', props)
  return (
    <div>Kitty</div>
  )
}

export default compose(
  graphql(getAllKittyStatements, {
    name: 'getAllKittyStatements'
  })
)(Kitty)