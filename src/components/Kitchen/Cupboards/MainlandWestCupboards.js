import React from 'react';
import { graphql, compose } from 'react-apollo'
import { getMainlandWestCupboards, updateOwner } from '../../../graphql/kitchen/cupboards'
import { allUsers } from '../../../graphql/user'
import { camelCaseToDash } from '../../../utilities/casing'
import { Shelves } from './Shelves'

class MainlandWestCupboards extends React.Component {
  

  cupboardClassName ({ landMass, cupboardNumber }, position) {
    return (
      camelCaseToDash(
        `${landMass}__cupboard ${landMass}__cupboard--${position} ${landMass}--${Math.floor(cupboardNumber)}`
      )
    )
  }

  render () {
    console.log(">>>>",this.props)
    const { mainlandWestCupboards, allUsers: { allUsers } } = this.props
    return (
      <div className="mainland-west-cupboards__container">
        {
          this.props.mainlandWestCupboards.loading
            ? <div>Loading</div>
            : <div>
              <div className="mainland-west__cupboard--top--container">
                {mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i, arr) => {
                  if (
                    Math.floor(cupboard.cupboardNumber) <= 3
                    && Math.floor(arr[i + 1].cupboardNumber) !== Math.floor(cupboard.cupboardNumber)
                  ) {
                    return (
                      <div key={i} className={`${this.cupboardClassName(cupboard, "top")}`}>
                        <Shelves
                          allCupboards={arr}
                          cupboard={cupboard}
                          updateOwner={this.props.updateOwner}
                          allUsers={allUsers}
                        />
                      </div>
                    )
                  }
                }
                )
                }
                <div className="mainland-west__cupboard mainland-west__cupboard--sink">sink</div>{this.props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i, arr) => {
                  if (
                    Math.floor(cupboard.cupboardNumber) > 3
                    && Math.floor(cupboard.cupboardNumber) <= 5
                    && Math.floor(arr[i + 1].cupboardNumber) !== Math.floor(cupboard.cupboardNumber)
                  ) {
                    return (
                      <div key={i} className={`${this.cupboardClassName(cupboard, "top")}`}>
                        <Shelves
                          allCupboards={arr}
                          cupboard={cupboard}
                          updateOwner={this.props.updateOwner}
                          allUsers={allUsers}
                        />
                      </div>
                    )
                  }
                }
                )
                }
              </div>
              <div className="mainland-west__cupboard--bottom--container">{this.props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i, arr) => {
                if (!arr[i + 1]) {
                  return (
                    <div key={i} className={`${this.cupboardClassName(cupboard, "bottom")}`}>
                      <Shelves 
                        allCupboards={arr}
                        cupboard={cupboard}
                        updateOwner={this.props.updateOwner}
                        allUsers={allUsers}
                      />
                    </div>
                  )
                }
                if (
                  Math.floor(cupboard.cupboardNumber) > 5
                  && Math.floor(cupboard.cupboardNumber) <= 11
                  && Math.floor(arr[i + 1].cupboardNumber) !== Math.floor(cupboard.cupboardNumber)
                ) {
                  return (
                    <div key={i} className={`${this.cupboardClassName(cupboard, "bottom")}`}>
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
  
}

export const MainlandWestCupboardsContainer = compose(
  graphql(getMainlandWestCupboards,
    { name: "mainlandWestCupboards" }
  ),
  graphql(updateOwner,
    { name: "updateOwner" }
  ),
  graphql(allUsers,
    { name: "allUsers" }
  ),
)(MainlandWestCupboards)
