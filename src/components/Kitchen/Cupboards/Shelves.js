import React from 'react';
import { Shelf } from './Shelf'

export const Shelves = (props) => {
  const getShelves = props.allCupboards.filter(cupboard => {
    return Math.floor(cupboard.cupboardNumber) === Math.floor(props.cupboard.cupboardNumber)
  })
  return getShelves.map((shelf, i) => {

    { console.log(shelf) }
    return (
          <Shelf
            key={i}
            cupboardNumber={shelf.cupboardNumber}
            shelf={shelf}
            updateOwner={props.updateOwner}
            allUsers={props.allUsers}
            mainlandWestCupboards={props.mainlandWestCupboards}
            landmass={props.landmass}
          />
        )
  })
}
