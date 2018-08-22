import React from 'react';
import TopFloorPlan from './TopFloorPlan'
import GroundFloorPlan from './GroundFloorPlan'
import Kitchen from '../Kitchen/Kitchen'


class FloorPlan extends React.Component {
  state = {
    isTopFloorView: false
  }



  render() {
    const { loading } = this.props
    return (
      <div className="page__container">
        {
          loading
            ? <div>Loading</div>
            : <div>
              <button onClick={() => this.setState({ isTopFloorView: !this.state.isTopFloorView })}>change view</button>
              <div className="relative">
                <Kitchen />
                {
                  this.state.isTopFloorView
                    ? <TopFloorPlan />
                    : <GroundFloorPlan />
                }
              </div>
            </div>
        }
      </div>
    )
  }
}
export default FloorPlan
