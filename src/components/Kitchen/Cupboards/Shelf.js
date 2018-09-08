import React from 'react';
import Dropdown from '../../Common/Dropdown'

export class Shelf extends React.Component {
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
    await this.props.updateOwner({
      variables: { id: this.props.shelf.id, owner: this.state.newOwnerId }
    })

    this.props[this.props.landmass].refetch()
    this.setState({ isEditing: !this.state.isEditing })
  }

  getMenuItems() {
    const { allUsers, shelf } = this.props
    return allUsers && allUsers.map(user => {
      if (shelf && user.id !== shelf.owner) {
        return user
      }
      if (!shelf.owner) {
        return user
      }
      return null
    }
    )
  }

  render() {
    const {
      shelf,
      className,
      allUsers,
    } = this.props

    const {
      dropdownOpen
    } = this.state
    
    return (
      this.props.loading
        ? <div>Loading</div>
        : <div
          className="box mainland-west__cupboard--shelf"
        >
              {!this.state.isEditing
            ? <div className="box-content">
                  {
                    shelf.user && shelf.user.username
                    ? <span>{shelf.user.username}</span>
                    : <span className="text-gray text-sm line-height-lg">unoccupied</span>
                  }
                  <div className="box-footer">
                  <span className="text-xs">{shelf.cupboardNumber}</span>
                  <button className="btn btn-action btn-sm">
                    <i onClick={() => this.handleEditing(true)} className="icon icon-edit" />
                  </button>
                  </div>
                </div>
                : <div className="box-content">
                  <Dropdown
                    isOpen={dropdownOpen}
                    onClose={() => this.handleEditing()}
                    header={
                      this.state.newOwnerName || (shelf.user && shelf.user.username)
                    }
                    menuItems={this.getMenuItems()}
                    onClick={(user) => this.onChangeHandler(user)}
                    displayValue={"username"}
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