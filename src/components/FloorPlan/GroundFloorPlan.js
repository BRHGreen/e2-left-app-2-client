import React from 'react';
import { TopFloorBedroomsContainer as TopFloorBedrooms } from './TopFloorBedrooms'
import { GroundFloorBedroomsContainer as GroundFloorBedrooms } from './GroundFloorBedrooms'

class GroundFloorPlan extends React.Component {
  render() {
    const { loading } = this.props
    return (
      <div className="page__container">
        {
          loading 
          ? <div>Loading</div>
          : <div>
              <GroundFloorBedrooms />
            </div>
        }
      </div>
    )
  }
}
export default GroundFloorPlan
