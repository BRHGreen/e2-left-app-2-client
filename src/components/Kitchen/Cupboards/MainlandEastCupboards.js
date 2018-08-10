import React from 'react';
import { graphql, compose } from 'react-apollo'
import { getMainlandEastCupboards } from '../../../graphql/kitchen/cupboards'

const MainlandEastCupboards = (props) => {
  return (
    <div>MainlandEastCupboards</div>
  )
}

export const MainlandEastCupboardsContainer = compose(
  graphql(getMainlandEastCupboards,
    { name: "mainlandEastCupboards" }
  ),
)(MainlandEastCupboards)
