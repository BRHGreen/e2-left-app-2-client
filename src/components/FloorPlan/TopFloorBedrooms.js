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
      <div className="top-floor__bedrooms">
          <div className="room-container--1">
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

