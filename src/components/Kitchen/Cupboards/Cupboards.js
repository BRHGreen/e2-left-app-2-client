import React, { Component } from 'react';

class Cupboards extends React.Component {
  state = {

  }
  handleViewChange (e) {
    console.log('e', e)
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
        cupboards.map((cupboard, i)=>(
          <div 
            className={`kitchen__cupboards__${cupboard}`}
            handleViewChange={(e) => this.handleViewChange (e)}
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