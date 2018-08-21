import React from 'react';
import { TopFloorBedroomsContainer as TopFloorBedrooms } from './TopFloorBedrooms'
import Kitchen from '../Kitchen/Kitchen'

class TopFloorPlan extends React.Component {
  render() {
    console.log(this.props)
    const { loading } = this.props
    return (
      <div className="page__container">
        {
          loading 
          ? <div>Loading</div>
            : <div className="top-floor__container full-height full-width">
                <div className="top-floor__container--bedrooms">
                  <TopFloorBedrooms />
                </div>
                <div className="top-floor__container--kitchen">
                  <Kitchen history={this.props.history} />
                </div>
              </div>
        }
      </div>
    )
  }
}
export default TopFloorPlan
