import React from 'react';
import { TopFloorBedroomsContainer as TopFloorBedrooms } from './TopFloorBedrooms'
import { GroundFloorBedroomsContainer as GroundFloorBedrooms } from './GroundFloorBedrooms'

class FloorPlan extends React.Component {
  render() {
    const { loading } = this.props
    return (
      <div className="page__container floor-plan__container">
        {
          loading 
          ? <div>Loading</div>
          : <div>
              <TopFloorBedrooms />
              <GroundFloorBedrooms />
            </div>
        }
      </div>
    )
  }
}
export default FloorPlan
