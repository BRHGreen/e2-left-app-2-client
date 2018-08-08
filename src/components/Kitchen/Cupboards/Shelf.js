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
    console.log("e",e.target.value)
    this.setState({ newOwner: e.target.value })
    console.log("this.state", this.state.newOwner)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const response = await this.props.updateOwner({
      variables: { id: this.props.shelf.id, newOwner: this.state.newOwner }
    })
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
                <select onChange={(e) => this.onChangeHandler(e)}>
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