import React from 'react';
import { GroundFloorBedroomsContainer as GroundFloorBedrooms } from './GroundFloorBedrooms'
import Utilities from './Utilities'
import Workshop from './Workshop'
import Kitchen from '../Kitchen/Kitchen'

const GroundFloorPlan = (props) => {
    const { loading } = props
    return (
      <div>
        {
          loading 
          ? <div>Loading</div>
            : <div className="full-height-vh--page relative">
              <Utilities />
              <Kitchen history={props.history} />
              <Workshop />
              <GroundFloorBedrooms />
            </div>
        }
      </div>
    )
  }

export default GroundFloorPlan
