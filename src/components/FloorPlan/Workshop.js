import React from 'react';

const Workshop = (props) => {
  const { loading } = props
  return (
    <div className="workshop__container">
      {
        loading
          ? <div>Loading</div>
          : <div>
            Workshop
          </div>
      }
    </div>
  )
}

export default Workshop
