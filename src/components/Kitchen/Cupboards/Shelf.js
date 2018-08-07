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

  render() {
    const {
      shelf,
      className,
    } = this.props

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
                : <form>
                    <input 
                      value={this.state.owner}
                      onChange={(e) => this.onChangeHandler(e)}
                    />
                    <span onClick={this.handleEditing}>cancel</span>
                    <span>submit</span>
                  </form>

              }
            </div>
        </div>

    )
  }
}