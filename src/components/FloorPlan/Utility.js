import React from 'react';
import Dropdown from '../Common/Dropdown'

class Utility extends React.Component {
  state = {
    isEditing: false,
    newOwnerId: null,
    newOwnerName: null,
    dropdownOpen: false,
  }

  handleEditing = (isOpen) => {
    this.setState({
      isEditing: isOpen,
      dropdownOpen: isOpen,
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
    await this.props.updateRoom({
      variables: { id: this.props.room.id, owner: this.state.newOwnerId }
    })
    this.props[this.props.floor].refetch()
    this.setState({ isEditing: !this.state.isEditing })
  }

  getMenuItems () {
    const { allUsers, room } = this.props
    return allUsers && allUsers.map(user => {
      if (room && user.id !== room.owner) {
        return user
      }
      if (!room.owner) {
        return user
      }
      return null
    }
    )
  }
  
  render() {
    const { utility } = this.props
    const { isEditing, dropdownOpen, hide } = this.state
    return (
      <div className={`utility box utility__${utility.utilityType}`}>
      {!isEditing
          ? <div className="box-content">
          {
              utility.utilityType && <span>{utility.utilityType}</span>
          }
            <div className="box-footer">
            <span className="floor-plan__utility--number text-xs">{`no: ${utility.utilityNumber}`}</span>
              <button className="btn btn-action btn-sm">
                <i onClick={() => this.handleEditing(true)} className="icon icon-edit" />
              </button>
          </div>
        </div>
        
        : <div className="box-content">
            <Dropdown
              isOpen={dropdownOpen}
              onClose={() => this.handleEditing()}
              header={utility.isOpperational}
              menuItems={this.getMenuItems()}
              onChangeHandler={(user) => this.onChangeHandler(user)}
              displayValue="username"
            />
            
            <div className="box-footer edit" >
            <button onClick={this.handleSubmit} className="btn btn-primary btn-action btn-sm">
              <i className="icon icon-check" />
            </button>
            <button className="btn btn-action btn-sm" onClick={() => this.handleEditing(false)}>
              <i className="icon icon-cross" />
            </button>
          </div>
        </div>
        }
      </div>
    )
  }
}
export default Utility