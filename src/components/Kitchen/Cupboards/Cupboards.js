import React from 'react';
import { convertCasing } from '../../../utilities/casing'

const Cupboards = (props) => {
  const cupboards = [
    'corner',
    'mainland-east',
    'peninsula',
    'mainland-west',
    'island',
  ]
    return (
      <div>
        {
          cupboards.map((cupboard, i) => {
            return (
              <div
                key={i}
                className={`kitchen__cupboard kitchen__cupboard__${cupboard}`}
              >
                {i}
              </div>

            )
          }
          )
        }
      </div>
    )
}

export default Cupboards