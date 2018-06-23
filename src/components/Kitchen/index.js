import React from 'react';
import Fridges from './Fridges'
import Cupboards from './Cupboards'

class Kitchen extends React.Component {
  render () {
    return (
      <div className="kitchen__wrapper">
        <Fridges />
        <Cupboards />
        bleep   
      </div>
    )
  }
}

export default Kitchen;