import React from 'react';
import Fridges from './Fridges'
import Cupboards from './Cupboards/Cupboards'
import { MainlandWestCupboardsContainer as MainlandWestCupboards }
from './Cupboards/MainlandWestCupboards'
import { MainlandEastCupboardsContainer as MainlandEastCupboards }
from './Cupboards/MainlandEastCupboards'
import { convertCasing } from '../../utilities/casing'

class Kitchen extends React.Component {
  state = {
    cupboardView: 'allCupboards',
    mainlandWest: false,
    mainlandNorth: false,
    peninsula: false,
    island: false,
  }

  handleViewChange(cupboard) {
    const cupboardStateName = convertCasing(cupboard);
    console.log('cupboardStateName', cupboardStateName)
    this.setState({ [cupboardStateName]: !this.state[cupboardStateName] })
  }
  
  render () {
    const { cupboardView } = this.state
    return (
      <div className="kitchen__wrapper">
        <Fridges />
        {cupboardView === 'allCupboards' &&
          <Cupboards
            cupboards={this.state}
            handleViewChange={(cupboard) => this.handleViewChange(cupboard)}
          />
        }
        {cupboardView === 'mainlandWestCupboards' &&
          <MainlandWestCupboards />
        }
        {cupboardView === 'mainlandEastCupboards' &&
          <MainlandEastCupboards />
        }
      </div>
    )
  }
}

export default Kitchen;