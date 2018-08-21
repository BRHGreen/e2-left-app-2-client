import React from 'react';
import { GroundFloorBedroomsContainer as GroundFloorBedrooms } from './GroundFloorBedrooms'
import Utilities from './Utilities'

const GroundFloorPlan = (props) => {
    const { loading } = props
    return (
      <div>
        {
          loading 
          ? <div>Loading</div>
          : <div className="full-height">
              <GroundFloorBedrooms />
              <Utilities />
            </div>
        }
      </div>
    )
  }

export default GroundFloorPlan
