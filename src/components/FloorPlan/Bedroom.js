import React from 'react';

class Bedroom extends React.Component {
  state = {
    isEditing: false,
    newOwnerId: null,
    newOwnerName: null,
    dropdownOpen: false,
  }

  handleEditing = (isdropdownOpen) => {
    this.setState({ 
      isEditing: !this.state.isEditing,
      dropdownOpen: isdropdownOpen,
      newOwnerName: null,
    })
  }

  onChangeHandler(newOwner) {
    this.setState({ 
      newOwnerId: newOwner.id,
      newOwnerName: newOwner.username,
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  handleSubmit = async () => {
    console.log('submit', this.props)
    await this.props.updateRoom({
      variables: { id: this.props.room.id, owner: this.state.newOwnerId }
    })
    this.props.groundFloor.refetch()
    this.setState({ isEditing: !this.state.isEditing })
  }

  render() {
    const { room, allUsers } = this.props
    const { isEditing, dropdownOpen, hide } = this.state
    return (
      <div className="floor-plan__room">
      {!isEditing
       ? 
        <div className="floor-plan__room--content">
          {
            room.user && room.user.username
              ? <span>{room.user.username}</span>
              : <span className="text-gray text-sm line-height-lg">unoccupied</span>
          }
          <div className="floor-plan__room--footer">
            <span className="floor-plan__room--number text-xs">{`no: ${room.roomNumber}`}</span>
              <button className="btn btn-action btn-sm">
                <i onClick={() => this.handleEditing(true)} className="icon icon-edit" />
              </button>
          </div>
        </div>

        :
        <div className="floor-plan__room--content">
            <details className="accordion" open={dropdownOpen}>
              <summary className="accordion-header">
                  {this.state.newOwnerName || (room.user && room.user.username)}
              </summary>
              {console.log(this.props)}
                <div className="accordion-body">
                <ul className="menu menu-nav">
                  {
                    allUsers && allUsers
                      .filter(user => user.id !== room.user.id)
                      .map((user, i) => (
                      <li
                        className="menu-item"
                        key={i}
                        value={user.id}
                      >
                        <a onClick={() => this.onChangeHandler(user)}>{user.username}</a>
                      </li>
                    )
                    )
                  }
                  <li onClick={() => this.handleEditing()}>close</li>
                </ul>
              </div>
            </details>
            <div className="floor-plan__room--footer edit" >
            <button onClick={this.handleSubmit} className="btn btn-primary btn-action btn-sm">
              <i className="icon icon-check" />
            </button>
            <button className="btn btn-action btn-sm" onClick={this.handleEditing}>
              <i className="icon icon-cross" />
            </button>
          </div>
        </div>
        }
      </div>
    )
  }
}
export default Bedroom