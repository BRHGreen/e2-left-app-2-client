import React from 'react';
import { GroundFloorBedroomsContainer as GroundFloorBedrooms } from './GroundFloorBedrooms'

class GroundFloorPlan extends React.Component {
  render() {
    const { loading } = this.props
    return (
      <div className="full-height">
        {
          loading 
          ? <div>Loading</div>
          : <GroundFloorBedrooms />
        }
      </div>
    )
  }
}
export default GroundFloorPlan
