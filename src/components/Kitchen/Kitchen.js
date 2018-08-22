import React from 'react';
import Fridges from './Fridges'
import Cupboards from './Cupboards/Cupboards'

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
        <div className="kitchen__container">
          <Cupboards handleViewChange={(cupboard) => this.handleViewChange(cupboard)}/>
          <Fridges />
        </div>
    )
  }
}

export default Kitchen;