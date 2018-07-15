import React from 'react';
import { graphql, compose } from 'react-apollo'
import { getMainlandWestCupboards } from '../../../graphql/kitchen/cupboards'

const MainlandWestCupboards = (props) => {
  console.log('MainlandWestCupboards', props)
  return (
    <div>MainlandWestCupboards</div>
  )
}

const MainlandWestCupboardsWithQueriesAndMutations = compose(
  graphql(getMainlandWestCupboards,
    { name: "mainlandWestCupboards" }
  ),
)(MainlandWestCupboards)

export default MainlandWestCupboardsWithQueriesAndMutations