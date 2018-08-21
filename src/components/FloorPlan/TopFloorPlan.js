import React from 'react';
import { TopFloorBedroomsContainer as TopFloorBedrooms } from './TopFloorBedrooms'
import Kitchen from '../Kitchen/Kitchen'
import { GroundFloorBedroomsContainer as GroundFloorBedrooms } from './GroundFloorBedrooms'

class TopFloorPlan extends React.Component {
  state = {
    isTopFloorView: true
  }


  
  render() {
    const { loading } = this.props
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
}
export default TopFloorPlan
