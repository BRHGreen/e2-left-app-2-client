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
    console.log("this.props", this.props)
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
          className={className}
        >
          <span className="kitchen-shelf--number">{shelf.cupboardNumber}</span>
            <div>
              {!this.state.isEditing
                ? [
                  <span key="1">{this.props.owner}</span>,
                  <br key="2"/>,
                  <button key="3" className="btn btn-action btn-sm">
                    <i onClick={() => this.handleEditing(true)} className="icon icon-edit" />
                  </button>
                ]
              : 
                <div>
                  <Dropdown
                    isOpen={dropdownOpen}
                    onClose={() => this.handleEditing()}
                    header={
                      this.state.newOwnerName || (shelf.user && shelf.user.username)
                    }
                    menuItems={this.getMenuItems()}
                    onChangeHandler={(user) => this.onChangeHandler(user)}
                    displayValue={"username"}
                  />
                  <div className="floor-plan__room--footer edit" >
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
        </div>

    )
  }
}