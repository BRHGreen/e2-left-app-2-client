import React from 'react';

class Bedroom extends React.Component {
  state = {
    isEditing: false,
    newOwner: null,
  }

  handleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  onChangeHandler(newOwner) {
    this.setState({ newOwner })
    console.log('onChange', newOwner)
  }

  handleSubmit = async () => {
    console.log('submit', this.props)
    await this.props.updateRoom({
      variables: { id: this.props.room.id, owner: this.state.newOwner }
    })
    this.props.groundFloor.refetch()
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
            <div className="accordion">
              <input type="checkbox" id="accordion-1" name="accordion-checkbox" hidden /> 
                <label className="accordion-header" htmlFor="accordion-1">
                  <i className="icon icon-arrow-right mr-1"></i>
                  {room.user && room.user.username}
                </label>
                <div className="accordion-body">
                <ul className="menu menu-nav">
                  {
                    allUsers &&
                    allUsers.map((user, i) => (
                      <li
                        className="menu-item"
                        key={i}
                        value={user.id}
                        onBlur={this.handleEditing}
                      >
                        <a onClick={() => this.onChangeHandler(user.id)}>{user.username}</a>
                      </li>
                    )
                    )
                  }
                </ul>
                </div>
            </div>
            <button onClick={this.handleSubmit} className="btn btn-primary btn-action btn-sm">
              <i className="icon icon-check" />
            </button>
        </div>
        }
      </div>
    )
  }
}
export default Bedroom