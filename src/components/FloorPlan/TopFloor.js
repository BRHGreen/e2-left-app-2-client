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
          <div className="room-container--1">
          {
            getTopFloor && getTopFloor.map((room, i) => {
              if (room.roomNumber <= 3) {
                return (
                  <div className="floor-plan__room" key={i}>{`no: ${room.roomNumber}`}</div>
                )
              }
            })
          }
          </div>
          <div className="floor-plan__room--break one">break</div>
          <div className="room-container--2">
          {
            getTopFloor && getTopFloor.map((room, i) => {
              if (room.roomNumber > 3 && room.roomNumber <= 6) {
                return (
                  <div className="floor-plan__room" key={i}>{`no: ${room.roomNumber}`}</div>
                )
              }
            })
          }
          </div>
          <div className="floor-plan__room--break two">break</div>
          <div className="room-container--3">
          {
            getTopFloor && getTopFloor.map((room, i) => {
              if (room.roomNumber > 6) {
                return (
                  <div className="floor-plan__room" key={i}>{`no: ${room.roomNumber}`}</div>
                )
              }
            })
          }
          </div>
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

