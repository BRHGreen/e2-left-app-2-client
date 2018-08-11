import React from 'react';
import { graphql, compose } from 'react-apollo'
import { allRooms } from '../../graphql/floorPlan'



class FloorPlanContainer extends React.Component {
  render() {
    const { allRooms: { getRooms }, loading } = this.props
    console.log('getRooms', getRooms)
    return (
      // null
      <div>
        {
        loading ? <div>Loading</div>
        : 
          getRooms && getRooms.map((room, i) => {
              return <div key={i}>{room.roomNumber}</div>
          })
        }
      </div>
    )
  }
}
export const FloorPlan = compose(
  graphql(allRooms,
    { name: "allRooms" }
  ),
)(FloorPlanContainer)

