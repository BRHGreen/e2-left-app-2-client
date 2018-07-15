import React from 'react';
import { graphql, compose } from 'react-apollo'
import { getMainlandEastCupboards } from '../../../graphql/kitchen/cupboards'

const MainlandEastCupboards = (props) => {
  console.log('MainlandEastCupboards', props)
  return (
    <div>MainlandEastCupboards</div>
  )
}

const MainlandEastCupboardsWithQueriesAndMutations = compose(
  graphql(getMainlandEastCupboards,
    { name: "mainlandEastCupboards" }
  ),
)(MainlandEastCupboards)

export default MainlandEastCupboardsWithQueriesAndMutations