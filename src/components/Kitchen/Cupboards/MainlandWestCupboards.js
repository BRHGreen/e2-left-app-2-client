import React from 'react';
import { graphql, compose } from 'react-apollo'
import { getMainlandWestCupboards } from '../../../graphql/kitchen/cupboards'
import { camelCaseToDash } from '../../../utilities/casing';

const MainlandWestCupboards = (
  props,
) => {
  console.log('MainlandWestCupboards', props.mainlandWestCupboards
)
  const cupboardClassName = ({ landMass, cupboardNumber }, position) => (
    camelCaseToDash(
      `${landMass}__cupboard ${landMass}__cupboard--${position} ${landMass}--${cupboardNumber}`
    )
  )

  return (
    <div className="mainland-west-cupboards__container">
    {
      props.mainlandWestCupboards.loading 
      ? <div>Loading</div>
      : <div>
          <div className="mainland-west__cupboard--top--container">
            {props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i, arr) => {

                if (
                  Math.floor(cupboard.cupboardNumber) <= 3
                  && Math.floor(arr[i + 1].cupboardNumber) !== Math.floor(cupboard.cupboardNumber)
                ) {
                return (
                  <div key={i} className={`${cupboardClassName(cupboard, "top")}`}>
                    {cupboard.cupboardNumber}
                  </div>
                )
              }
            }
          )
        }
        <div className="mainland-west__cupboard mainland-west__cupboard--sink">sink</div>{props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i, arr) => {
            if (
              Math.floor(cupboard.cupboardNumber) > 3 
              && Math.floor(cupboard.cupboardNumber) <= 5
              && Math.floor(arr[i + 1].cupboardNumber) !== Math.floor(cupboard.cupboardNumber)
            ) {
              return (
                <div key={i} className={`${cupboardClassName(cupboard, "top")}`}>
                  {cupboard.cupboardNumber}
                </div>
              )
            }
          }
        )
      }
      </div>
            <div className="mainland-west__cupboard--bottom--container">{props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i, arr) => {
              console.log('****', arr[i + 1])
            if (
              arr[i + 1]
              && Math.floor(cupboard.cupboardNumber) > 5
              && Math.floor(cupboard.cupboardNumber) <= 11
              && Math.floor(arr[i + 1].cupboardNumber) !== Math.floor(cupboard.cupboardNumber)
            ) {
              return (
                <div key={i} className={`${cupboardClassName(cupboard, "bottom")}`}>
                  {cupboard.cupboardNumber}
                </div>
              )
            }
          }
        )
      }
    </div>
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
