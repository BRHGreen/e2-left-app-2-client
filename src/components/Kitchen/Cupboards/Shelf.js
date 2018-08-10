import React from 'react';

export class Shelf extends React.Component {
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
    const response = await this.props.updateOwner({
      variables: { id: this.props.shelf.id, owner: this.state.newOwner }
    })
    this.setState({ isEditing: !this.state.isEditing })
  }

  render() {
    const {
      shelf,
      className,
      allUsers,
    } = this.props

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
                  <span
                    key="3"
                    onClick={() => this.handleEditing()}
                  >
                    EDIT
              </span>
                ]
                : <form onSubmit={this.handleSubmit}>
                <select onChange={(e) => this.onChangeHandler(e)} defaultValue={shelf.user.id}>
                      {
                        allUsers &&
                        allUsers.map((user, i) => (
                      <option
                        key={i}
                        value={user.id}
                      >
                        {user.username}
                      </option>
                          )
                        )
                      }
                      <option>unoccupied</option>
                      <option>communal</option>
                    </select>
                  <button onClick={this.handleEditing}>cancel</button>
                  <button>submit</button>
                  </form>

              }
            </div>
        </div>

    )
  }
}