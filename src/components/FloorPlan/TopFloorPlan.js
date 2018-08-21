import React from 'react';
import { TopFloorBedroomsContainer as TopFloorBedrooms } from './TopFloorBedrooms'

const TopFloorPlan = (props) => {
    const { loading } = props
    return (
      <div className="full-height">
        {
          loading 
          ? <div>Loading</div>
          : <TopFloorBedrooms />
        }
      </div>
    )
  }

export default TopFloorPlan
