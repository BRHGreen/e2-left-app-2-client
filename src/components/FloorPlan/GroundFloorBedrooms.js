import React from 'react';
import { graphql, compose } from 'react-apollo'
import { groundFloor, updateRoom } from '../../graphql/floorPlan'
import { allUsers } from '../../graphql/user'
import Bedroom from './Bedroom'

class GroundFloorBedrooms extends React.Component {
  render() {
    const { 
      groundFloor,
      groundFloor: { getGroundFloor },
      allUsers: { allUsers },
      updateRoom
    } = this.props

    return (
      <div className="page__content">
        <p><b>Bedrooms; Ground Floor</b></p>
        <div>
          <div className="room-container--4">
          {
            getGroundFloor && getGroundFloor.map((room, i) => {
                return (
                  <Bedroom
                    key={i}
                    room={room}
                    allUsers={allUsers}
                    getGroundFloor={getGroundFloor}
                    groundFloor={groundFloor}
                    updateRoom={updateRoom}
                  />
                )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}
export const GroundFloorBedroomsContainer = compose(
  graphql(groundFloor,
    { name: "groundFloor" }
  ),
  graphql(allUsers,
    { name: "allUsers" }
  ),
  graphql(updateRoom,
    { name: "updateRoom" }
  ),
)(GroundFloorBedrooms)

