import React from 'react';

export const Shelves = (props) => {
  console.log('props', props)
  const getShelves = props.allCupboards.filter(cupboard => {
    return Math.floor(cupboard.cupboardNumber) === Math.floor(props.cupboard.cupboardNumber)
  })
  console.log('getShelves', getShelves)
  return (
    getShelves.map((shelf, i) => (
      <div className={`kitchen-shelf kitchen-shelf--${getShelves.length}`}>{shelf.cupboardNumber}</div>
    ))
  )
}