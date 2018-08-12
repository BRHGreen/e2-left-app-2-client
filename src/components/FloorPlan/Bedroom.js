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
      <div className="floor-plan__room">
      {!this.state.isEditing
       ? 
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

        :
        <div className="floor-plan__room--content">
          <form onSubmit={this.handleSubmit}>
            <select onChange={(e) => this.onChangeHandler(e)} defaultValue={room.user && room.user.id || "unoccupied"}>
              {
                allUsers &&
                allUsers.map((user, i) => (
                  <option
                    key={i}
                    value={user.id}
                    onBlur={this.handleEditing}
                  >
                  {user.username}
                  </option>
                )
                )
              }
              <option>unoccupied</option>
            </select>
            <div className="floor-plan__room--footer">
                <button className="btn btn-action btn-sm" onClick={this.handleEditing}>
                  <i className="icon icon-cross" />
                </button>
                <button className="btn btn-primary btn-action btn-sm">
                  <i className="icon icon-check" />
                </button>

            </div>
          </form>
          </div>
        }
      </div>
    )
  }
}
export default Bedroom

