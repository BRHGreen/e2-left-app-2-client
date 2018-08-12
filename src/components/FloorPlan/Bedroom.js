import React from 'react';

class Bedroom extends React.Component {
  state = {
    isEditing: false,
    newOwner: null,
  }

  handleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  onChangeHandler(e) {
    e.preventDefault()
    this.setState({ newOwner: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await this.props.updateOwner({
      variables: { id: this.props.room.id, owner: this.state.newOwner }
    })
    this.props.mainlandWestCupboards.refetch()
    this.setState({ isEditing: !this.state.isEditing })
  }

  render() {
    const { room, allUsers } = this.props
    return (
      <div>
       <div className="floor-plan__room">
        <div className="floor-plan__room--content">
          {
            room.user && room.user.username
              ? <span>{room.user.username}</span>
              : <span className="text-gray text-sm line-height-lg">unoccupied</span>
          }
          <div className="floor-plan__room--footer">
            <span className="floor-plan__room--number text-xs">{`no: ${room.roomNumber}`}</span>
            <i onClick={() => this.handleEditing()} className="icon icon-edit" />
          </div>
        </div>
        </div>
        {allUsers && allUsers.map(user => {
          console.log('user', user)
        })}
      </div>
    )
  }
}
export default Bedroom

