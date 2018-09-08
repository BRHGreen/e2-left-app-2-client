import React from 'react';
import { graphql, compose } from 'react-apollo'
import { getMainlandWestCupboards, updateOwner } from '../../../graphql/kitchen/cupboards'
import { allUsers } from '../../../graphql/user'
import { camelCaseToDash } from '../../../utilities/casing'
import { Shelves } from './Shelves'
import { get } from 'https';

class MainlandWestCupboards extends React.Component {

  render () {
    const { mainlandWestCupboards, allUsers: { allUsers } } = this.props
    
    return (
      <div className="page__container">
        {
          this.props.mainlandWestCupboards.loading
            ? <div>Loading</div>
            : <div>
              <div>{mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i, arr) => {
                  if (
                    Math.floor(cupboard.cupboardNumber) <= 3
                    && Math.floor(arr[i + 1].cupboardNumber) !== Math.floor(cupboard.cupboardNumber)
                  ) {
                    return (
                      <div key={i} className="mainland-west__cupboard">
                        <Shelves
                          allCupboards={arr}
                          cupboard={cupboard}
                          updateOwner={this.props.updateOwner}
                          allUsers={allUsers}
                          mainlandWestCupboards={mainlandWestCupboards}
                          landmass="mainlandWestCupboards"
                        />
                      </div>
                    )
                  }
                  return null
                  })
                }
                <div className="mainland-west__cupboard mainland-west__cupboard--sink">sink</div>{this.props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i, arr) => {
                  if (
                    Math.floor(cupboard.cupboardNumber) > 3
                    && Math.floor(cupboard.cupboardNumber) <= 5
                    && Math.floor(arr[i + 1].cupboardNumber) !== Math.floor(cupboard.cupboardNumber)
                  ) {
                    return (
                      <div key={i} className="mainland-west__cupboard">
                        <Shelves
                          allCupboards={arr}
                          cupboard={cupboard}
                          updateOwner={this.props.updateOwner}
                          allUsers={allUsers}
                          mainlandWestCupboards={mainlandWestCupboards}
                          landmass="mainlandWestCupboards"
                        />
                      </div>
                    )
                  }
                  return null
                }
                )
                }
              </div>
              <div>{this.props.mainlandWestCupboards.getMainlandWestCupboards.map((cupboard, i, arr) => {
                if (!arr[i + 1]) {
                  return (
                    <div key={i} className="mainland-west__cupboard">
                      <Shelves 
                        allCupboards={arr}
                        cupboard={cupboard}
                        updateOwner={this.props.updateOwner}
                        allUsers={allUsers}
                        mainlandWestCupboards={mainlandWestCupboards}
                        landmass="mainlandWestCupboards"
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
                    <div key={i} className="mainland-west__cupboard">
                      <Shelves 
                        allCupboards={arr}
                        cupboard={cupboard}
                        updateOwner={this.props.updateOwner}
                        mainlandWestCupboards={mainlandWestCupboards}
                        allUsers={allUsers}
                        landmass="mainlandWestCupboards"
                      />
                    </div>
                  )
                }
                return null
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
