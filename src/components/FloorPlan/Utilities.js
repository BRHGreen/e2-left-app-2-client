import React from 'react';

const Utilities = (props) => {
  const { loading } = props
  return (
    <div className="utilities__container">
      {
        loading
          ? <div>Loading</div>
          : <div>
            utilities
          </div>
      }
    </div>
  )
}

export default Utilities
