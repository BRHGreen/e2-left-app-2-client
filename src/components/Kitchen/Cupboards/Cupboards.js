import React from 'react';
import { graphql, compose } from 'react-apollo'
import { allCupboards } from '../../../graphql/kitchen/cupboards'
import { convertCasing } from '../../../utilities/casing'

class Cupboards extends React.Component {
  state = {
    cupboardView: 'allCupboards',
    mainlandWest: false,
    mainlandNorth: false,
    peninsula: false,
    island: false,
  }
  
  render () {
    const cupboards = [
      'mainland-west',
      'mainland-north',
      'peninsula',
      'island',
    ]
    const { handleViewChange } = this.props
    console.log('cupboard props',this.props)
    return (
      <div className="kitchen__cupboards">
      {
        cupboards.map((cupboard, i)=> {
          const cupboardName = convertCasing(cupboard);
          return (
          <div
            className={`kitchen__cupboards__${cupboard} ${this.props[cupboardName] ? "selected" : ""}`}
            key={i}
            onClick={() => handleViewChange(cupboardName)}
          >
            {`kitchen__cupboards__${cupboard}`}
          </div>
        
        )
        }
      )
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