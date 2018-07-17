import React from 'react';
import { graphql, compose } from 'react-apollo'
import { getMainlandWestCupboards } from '../../../graphql/kitchen/cupboards'
import { camelCaseToDash } from '../../../utilities/casing';

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
      : <div>{props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i) => {
          const cupboardClassName = camelCaseToDash(`${cupboard.landMass}--${cupboard.cupboardNumber}`)
          return (
            <div key={i} className={cupboardClassName}>
              {}
            </div>
          )
        }
      )
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
