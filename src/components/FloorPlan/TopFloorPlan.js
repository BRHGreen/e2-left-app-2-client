import React from 'react';
import { TopFloorBedroomsContainer as TopFloorBedrooms } from './TopFloorBedrooms'

class TopFloorPlan extends React.Component {
  render() {
    const { loading } = this.props
    return (
      <div className="page__container">
        {
          loading 
          ? <div>Loading</div>
            : <div className="top-floor__container">
              <TopFloorBedrooms />
            </div>
        }
      </div>
    )
  }
}
export default TopFloorPlan
