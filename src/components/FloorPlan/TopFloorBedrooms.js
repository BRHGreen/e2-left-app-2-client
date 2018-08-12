import React from 'react';
import { graphql, compose } from 'react-apollo'
import { topFloor } from '../../graphql/floorPlan'
import Bedroom from './Bedroom'

class TopFloorBedrooms extends React.Component {
  render() {
    const { topFloor: { getTopFloor } } = this.props
    return (
      <div className="page__content">
        <p><b>Bedrooms; Top Floor</b></p>
        <div>
          <div className="room-container--1">
          {
            getTopFloor && getTopFloor.map((room, i) => {
              if (room.roomNumber <= 3) {
                return (
                  <Bedroom key={i} room={room} />
                )
              }
              return null
            })
          }
          </div>
          <div className="floor-plan__room--break one">break</div>
          <div className="room-container--2">
          {
            getTopFloor && getTopFloor.map((room, i) => {
              if (room.roomNumber > 3 && room.roomNumber <= 6) {
                return (
                  <Bedroom key={i} room={room} />
                )
              }
              return null
            })
          }
          </div>
          <div className="floor-plan__room--break two">break</div>
          <div className="room-container--3">
          {
            getTopFloor && getTopFloor.map((room, i) => {
              if (room.roomNumber > 6) {
                return (
                  <Bedroom key={i} room={room} />
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
)(TopFloorBedrooms)

