import React from 'react';
import { graphql, compose } from 'react-apollo'
import { allCupboards } from '../../../graphql/kitchen/cupboards'

class Cupboards extends React.Component {
  state = {
    cupboardView: 'allCupboards',
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
    console.log('cupboard props',this.props)
    return (
      <div className="kitchen__cupboards">
      {
        cupboards.map((cupboard, i)=> (
          <div
            className={`kitchen__cupboards__${cupboard} ${this.props[this.convertCasing(cupboard)] ? "selected" : ""}`}
            onClick={() => this.handleViewChange (cupboard)}
            key={i}
          >
            {`kitchen__cupboards__${cupboard}`}
          </div>
        ))
      }
      </div>
    )
  }
}

const CupboardsWithQueriesAndMutations = compose(
  graphql(allCupboards, 
    { name: "allCupboards" }
  ),
)(Cupboards)
export default CupboardsWithQueriesAndMutations