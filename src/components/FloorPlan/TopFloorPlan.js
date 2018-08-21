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
      <div className="page__container">
        {
          loading 
          ? <div>Loading</div>
            : <div className="top-floor__container full-height full-width">
            <button onClick={() => this.setState({ isTopFloorView: !this.state.isTopFloorView })}>change view</button>
                <div className="top-floor__container--bedrooms">
                  <div className="full-height full-width absolute room-container">
                    {
                      this.state.isTopFloorView
                      ? <TopFloorBedrooms />
                      : <GroundFloorBedrooms />
                    }
                  </div>
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
