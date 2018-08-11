import React from 'react';
import { TopFloorContainer as TopFloor} from './TopFloor'

class FloorPlan extends React.Component {
  render() {
    const { loading } = this.props
    return (
      // null
      <div className="floor-plan__container">
        {
          loading 
          ? <div>Loading</div>
          : <div>
              <TopFloor />
            </div>
        }
      </div>
    )
  }
}
export default FloorPlan
