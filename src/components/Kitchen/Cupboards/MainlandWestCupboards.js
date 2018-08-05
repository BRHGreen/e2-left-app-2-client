import React from 'react';
import { graphql, compose } from 'react-apollo'
import { getMainlandWestCupboards } from '../../../graphql/kitchen/cupboards'
import { camelCaseToDash } from '../../../utilities/casing'
import { Shelves } from './Shelves'

const MainlandWestCupboards = (
  props,
) => {
  const cupboardClassName = ({ landMass, cupboardNumber }, position) => (
    camelCaseToDash(
      `${landMass}__cupboard ${landMass}__cupboard--${position} ${landMass}--${Math.floor(cupboardNumber)}`
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
                    <Shelves allCupboards={arr} cupboard={cupboard}/>
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
                  <Shelves allCupboards={arr} cupboard={cupboard} />
                </div>
              )
            }
          }
        )
      }
      </div>
            <div className="mainland-west__cupboard--bottom--container">{props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i, arr) => {
            if (!arr[i + 1]) {
              return (
                <div key={i} className={`${cupboardClassName(cupboard, "bottom")}`}>
                  <Shelves allCupboards={arr} cupboard={cupboard} />
                </div>
              )
            }
            if (
              Math.floor(cupboard.cupboardNumber) > 5
              && Math.floor(cupboard.cupboardNumber) <= 11
              && Math.floor(arr[i + 1].cupboardNumber) !== Math.floor(cupboard.cupboardNumber)
            ) {
              return (
                <div key={i} className={`${cupboardClassName(cupboard, "bottom")}`}>
                  <Shelves allCupboards={arr} cupboard={cupboard} />
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
