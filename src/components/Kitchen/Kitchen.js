import React from 'react';
import Fridges from './Fridges'
import Cupboards from './Cupboards/Cupboards'
import { MainlandWestCupboardsContainer as MainlandWestCupboards }
from './Cupboards/MainlandWestCupboards'
import { MainlandEastCupboardsContainer as MainlandEastCupboards }
from './Cupboards/MainlandEastCupboards'

class Kitchen extends React.Component {
  state = {
    kitchenView: 'wholeKitchen',
    mainlandWest: false,
    mainlandNorth: false,
    peninsula: false,
    island: false,
  }

  handleViewChange(cupboard) {
    this.props.history.push(`/kitchen/${cupboard}`)
  }
  
  render () {
    return (
      <div className="kitchen__wrapper">
            <Fridges key="0"/>
            <Cupboards
              key="1"
              cupboards={this.state}
              handleViewChange={(cupboard) => this.handleViewChange(cupboard)}
            />
      </div>
    )
  }
}

export default Kitchen;