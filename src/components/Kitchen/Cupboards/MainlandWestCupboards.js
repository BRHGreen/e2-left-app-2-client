import React from 'react';
import { graphql, compose } from 'react-apollo'
import { getMainlandWestCupboards } from '../../../graphql/kitchen/cupboards'

const MainlandWestCupboards = (
  props,
) => {
  console.log('MainlandWestCupboards', props.mainlandWestCupboards
)
  return (

    <div className="mainland-west-cupboards__container">MainlandWestCupboards
    {
      props.mainlandWestCupboards.loading 
      ? <div>Loading</div>
      : <div>{props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i) => (
        <div key={i} className={`${cupboard.landMass}-${cupboard.cupboardNumber}`}>
        </div>
      ))
    }
    </div>
    }
    </div>
  )
}

export const MainlandWestCupboardsContainer = compose(
  graphql(getMainlandWestCupboards,
    { name: "mainlandWestCupboards" }
  ),
)(MainlandWestCupboards)
