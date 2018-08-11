import React from 'react';
import { graphql, compose } from 'react-apollo'
import { topFloor } from '../../graphql/floorPlan'

class TopFloor extends React.Component {
  render() {
    const { topFloor: { getTopFloor }, loading } = this.props
    console.log('top floor', this.props.topFloor.getTopFloor)
    return (
      <div>
        <div>
          {
            getTopFloor && getTopFloor.map((room, i) => {
              return (
                <div className="page-contene">
                  <div key={i}>{`no: ${room.roomNumber}`}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export const TopFloorContainer = compose(
  graphql(topFloor,
    { name: "topFloor" }
  ),
)(TopFloor)

