import React from 'react';

export class Shelf extends React.Component {
  state = {
    isEditing: false,
    shelfOwner: this.props.owner,
  }

  handleEditing = (cupboardNumber) => {
    console.log(cupboardNumber)
    this.setState({ isEditing: !this.state.isEditing })
    console.log('state', this.state)
  }

  onChangeHandler(e) {
    this.setState({ shelfOwner: e.target.value })
    console.log(this.state)
  }

  handleSubmit = async (e) => {
    console.log('id?', this.props.shelf.id)
    e.preventDefault()
    const response = await this.props.updateOwner({
      vaiables: { id: this.props.shelf.id, newOwner: this.state.owner }
    })
  }

  render() {
    const {
      shelf,
      className,
    } = this.props
    console.log("/////", this.props)
    return (
        <div
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
                    onClick={() => this.handleEditing(shelf.cupboardNumber)}
                  >
                    EDIT
              </span>
                ]
                : <form onSubmit={this.handleSubmit}>
                    <input 
                      value={this.state.owner}
                      onChange={(e) => this.onChangeHandler(e)}
                    />
                  <button onClick={this.handleEditing}>cancel</button>
                  <button>submit</button>
                  </form>

              }
            </div>
        </div>

    )
  }
}