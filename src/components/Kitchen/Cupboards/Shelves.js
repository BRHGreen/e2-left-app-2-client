import React from 'react';
import { Shelf } from './Shelf'

export const Shelves = (props) => {
  const getShelves = props.allCupboards.filter(cupboard => {
    return Math.floor(cupboard.cupboardNumber) === Math.floor(props.cupboard.cupboardNumber)
  })
  console.log("****", props.updateOwner)
  return getShelves.map((shelf, i) => (
        <Shelf
          key={i}
          owner={shelf.user ? shelf.user.username : "unoccupied"}
          className={`kitchen-shelf kitchen-shelf--${getShelves.length}`}
          cupboardNumber={shelf.cupboardNumber}
          shelf={shelf}
          updateOwner={props.updateOwner}
        />
      ))
}
