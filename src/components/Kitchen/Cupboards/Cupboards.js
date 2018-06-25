import React, { Component } from 'react';

class Cupboards extends React.Component {
  state = {
    mainlandWest: false,
    mainlandNorth: false,
    peninsula: false,
    island: false,    
  }

  convertCasing (string) {
    return string.replace(/-([a-z])/g, g => g[1].toUpperCase())
  }
  
  handleViewChange (cupboard) {
    const cupboardStateName = this.convertCasing(cupboard);
    this.setState({ [cupboardStateName]: !this.state[cupboardStateName] })
  }
  
  render () {
    const cupboards = [
      'mainland-west',
      'mainland-north',
      'peninsula',
      'island',
    ]
    return (
      <div className="kitchen__cupboards">
      {
        cupboards.map((cupboard, i)=> (
          <div
            className={`kitchen__cupboards__${cupboard} ${this.state[this.convertCasing(cupboard)] ? "selected" : ""}`}
            onClick={() => this.handleViewChange (cupboard)}
            key={i}
            name={cupboard}
          >
            {`kitchen__cupboards__${cupboard}`}
          </div>
        ))
      }
      </div>
    )
  }
}

export default Cupboards