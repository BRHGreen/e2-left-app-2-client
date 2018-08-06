import React from 'react';

export class Shelves extends React.Component {
  state = {
    isEditing: false,
  }
  getShelves = this.props.allCupboards.filter(cupboard => {
    return Math.floor(cupboard.cupboardNumber) === Math.floor(this.props.cupboard.cupboardNumber)
  })

  handleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing })
    console.log('state', this.state)
  }

  render () {
    return (
      this.getShelves.map((shelf, i) => (
        <div 
          key={i}
          className={`kitchen-shelf kitchen-shelf--${this.getShelves.length}`}
          >
          {shelf.cupboardNumber}
          {shelf.user &&
          <div>
            {!this.state.isEditing
             ? [
              <span>{shelf.user.username}</span>,
              <br/>,
              <span
               onClick={() => this.handleEditing()} 
              >
               EDIT
              </span>
            ]
            : <div>bleep</div>
            }
          </div>
          }
        </div>
      ))
    )
  }
}