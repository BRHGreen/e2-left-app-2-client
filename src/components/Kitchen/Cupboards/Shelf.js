import React from 'react';

export class Shelf extends React.Component {
  state = {
    isEditing: false,
  }

  handleEditing = (cupboardNumber) => {
    console.log(cupboardNumber)
    this.setState({ isEditing: !this.state.isEditing })
    console.log('state', this.state)
  }

  render() {
    const {
      key,
      isEditing,
      handleEditing,
      owner,
      shelf,
      className,
    } = this.props
    return (
        <div
          key={key}
          className={className}
        >
          {shelf.cupboardNumber}
          {shelf.user &&
            <div>
              {!this.state.isEditing
                ? [
                  <span>{owner}</span>,
                  <br />,
                  <span
                    onClick={() => this.handleEditing(shelf.cupboardNumber)}
                  >
                    EDIT
              </span>
                ]
                : <div>bleep</div>
              }
            </div>
          }
        </div>

    )
  }
}