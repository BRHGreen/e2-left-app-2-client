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
      `
       ${landMass}__cupboard
       ${landMass}__cupboard--${position}
       ${landMass}--${cupboardNumber}
       `
    )
  )

  return (
    <div className="mainland-west-cupboards__container">MainlandWestCupboards
    {
      props.mainlandWestCupboards.loading 
      ? <div>Loading</div>
      : <div>
          <div>
            {props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i) => {
              if (cupboard.cupboardNumber <= 3) {
                return (
                  <div key={i} className={`${cupboardClassName(cupboard, "top")}`}>
                    {cupboardClassName(cupboard, "top")}
                  </div>
                )
              }
            }
          )
        }
      </div>
        <div className="mainland-west__cupboard">sink blank</div>
        <div>
          {props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i) => {
            if (cupboard.cupboardNumber > 3 && cupboard.cupboardNumber <= 5) {
              return (
                <div key={i} className={`${cupboardClassName(cupboard, "top")}`}>
                  {cupboardClassName(cupboard, "top")}
                </div>
              )
            }
          }
        )
      }
    </div>
        <div>bottom break</div>
        <div>
          {props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i) => {
            if (cupboard.cupboardNumber > 5 && cupboard.cupboardNumber <= 11) {
              return (
                <div key={i} className={`${cupboardClassName(cupboard, "bottom")}`}>
                  {cupboardClassName(cupboard, "bottom")}
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
