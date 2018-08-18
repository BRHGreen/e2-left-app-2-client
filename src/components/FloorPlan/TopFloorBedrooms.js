import React from 'react';
import { graphql, compose } from 'react-apollo'
import { topFloor, updateRoom } from '../../graphql/floorPlan'
import { allUsers } from '../../graphql/user'
import Bedroom from './Bedroom'

class TopFloorBedrooms extends React.Component {
  render() {
    const {
      topFloor,
      topFloor: { getTopFloor },
      allUsers: { allUsers },
      updateRoom
    } = this.props
    return (
      <div>
        <p><b>Bedrooms; Top Floor</b></p>
        <div className="full-height full-width absolute">
          <div className="room-container room-container--1">
          {
            getTopFloor && getTopFloor.map((room, i) => {
              if (room.roomNumber <= 3) {
                return (
                  <Bedroom 
                    key={i}
                    room={room}
                    allUsers={allUsers}
                    getTopFloor={getTopFloor}
                    topFloor={topFloor}
                    updateRoom={updateRoom}
                    floor="topFloor"
                  />
                )
              }
              return null
            })
          }
          </div>
          <div className="floor-plan__room--break one">break</div>
          <div className="room-container room-container--2">
          {
            getTopFloor && getTopFloor.map((room, i) => {
              if (room.roomNumber > 3 && room.roomNumber <= 6) {
                return (
                  <Bedroom
                    key={i}
                    room={room}
                    allUsers={allUsers}
                    getTopFloor={getTopFloor}
                    topFloor={topFloor}
                    updateRoom={updateRoom}
                    floor="topFloor"
                  />
                )
              }
              return null
            })
          }
          </div>
          <div className="floor-plan__room--break two">break</div>
          <div className="room-container room-container--3">
          {
            getTopFloor && getTopFloor.map((room, i) => {
              if (room.roomNumber > 6) {
                return (
                  <Bedroom
                    key={i}
                    room={room}
                    allUsers={allUsers}
                    getTopFloor={getTopFloor}
                    topFloor={topFloor}
                    updateRoom={updateRoom}
                    floor="topFloor"
                  />
                )
              }
                return null
            })
          }
          </div>
        </div>
      </div>
    )
  }
}
export const TopFloorBedroomsContainer = compose(
  graphql(topFloor,
    { name: "topFloor" }
  ),
  graphql(allUsers,
    { name: "allUsers" }
  ),
  graphql(updateRoom,
    { name: "updateRoom" }
  ),
)(TopFloorBedrooms)

