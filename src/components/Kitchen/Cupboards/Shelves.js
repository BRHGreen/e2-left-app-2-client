import React from 'react';
import { Shelf } from './Shelf'
export class Shelves extends React.Component {
  
  getShelves = this.props.allCupboards.filter(cupboard => {
    return Math.floor(cupboard.cupboardNumber) === Math.floor(this.props.cupboard.cupboardNumber)
  })

  

  render () {
    return (
      this.getShelves.map((shelf, i) => (
      console.log('shelf', shelf),
        <Shelf
          key={i}
          owner={shelf.user ? shelf.user.username : "not currently occupied"}
          className={`kitchen-shelf kitchen-shelf--${this.getShelves.length}`}
          cupboardNumber={shelf.cupboardNumber}
          shelf={shelf}
        />
      ))
    )
  }
}