import React from 'react';
import { TopFloorBedroomsContainer as TopFloorBedrooms } from './TopFloorBedrooms'
import Kitchen from '../Kitchen/Kitchen';

const TopFloorPlan = (props) => {
    const { loading } = props
    return (
      <div>
        {
          loading 
          ? <div>Loading</div>
          
            : <div className="full-height-vh--page ">
              <TopFloorBedrooms />
            </div>
        }
      </div>
    )
  }

export default TopFloorPlan
