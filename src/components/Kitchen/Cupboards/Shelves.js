import React from 'react';

export const Shelves = (props) => {
  console.log('props', props)
  const getShelves = props.allCupboards.filter(cupboard => {
    return Math.floor(cupboard.cupboardNumber) === Math.floor(props.cupboard.cupboardNumber)
  })
  return (
    getShelves.map((shelf, i) => (
      <div 
        key={i}
        className={`kitchen-shelf kitchen-shelf--${getShelves.length}`}
        >
        {shelf.cupboardNumber}
        {shelf.user && <p>{shelf.user.username}</p>}
      </div>
    ))
  )
}