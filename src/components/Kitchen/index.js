import React from 'react';
import Fridges from './Fridges'
import Cupboards from './Cupboards/Cupboards'
import MainlandWestCupboardsWithQueriesAndMutations
from './Cupboards/MainlandWestCupboards'
import MainlandEastCupboardsWithQueriesAndMutations
  from './Cupboards/MainlandEastCupboards'

class Kitchen extends React.Component {
  state = {
    cupboardView: 'allCupboards',
    mainlandWest: false,
    mainlandNorth: false,
    peninsula: false,
    island: false,
  }
  render () {
    const { cupboardView } = this.state
    return (
      <div className="kitchen__wrapper">
        <Fridges />
        {cupboardView === 'allCupboards' &&
          <Cupboards
            cupboards={this.state}
          />
        }
        {cupboardView === 'mainlandWestCupboards' &&
          <MainlandWestCupboardsWithQueriesAndMutations />
        }
        {cupboardView === 'mainlandEastCupboards' &&
          <MainlandEastCupboardsWithQueriesAndMutations />
        }
      </div>
    )
  }
}

export default Kitchen;