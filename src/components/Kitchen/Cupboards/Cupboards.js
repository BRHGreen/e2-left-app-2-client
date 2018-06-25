import React from 'react';
import CupboardsMainlandWest from './CupboardsMainlandWest'
import CupboardsMainlandNorth from './CupboardsMainlandNorth'
import CupboardsPeninsula from './CupboardsPeninsula'
import CupboardsIsland from './CupboardsIsland'

const Cupboards = () => {
  return (
    <div className="kitchen__cupboards">
      <CupboardsMainlandWest />
      <CupboardsMainlandNorth />
      <CupboardsPeninsula />
      <CupboardsIsland />
    </div>
  )
}

export default Cupboards