import React from 'react';
import { GroundFloorBedroomsContainer as GroundFloorBedrooms } from './GroundFloorBedrooms'
import { UtilitiesContainer as Utilities } from './Utilities'
import Workshop from './Workshop'

const GroundFloorPlan = (props) => {
    const { loading } = props
    return (
      <div>
        {
          loading 
          ? <div>Loading</div>
            : <div className="full-height-vh--page ">
              <Utilities />
              <Workshop />
              <GroundFloorBedrooms />
            </div>
        }
      </div>
    )
  }

export default GroundFloorPlan
