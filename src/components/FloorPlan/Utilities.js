import React from 'react';
import { graphql, compose } from 'react-apollo'
import { getUtilities, updateUtility } from '../../graphql/utilities'
import Utility from './Utility'

const Utilities = (props) => {
  const { getUtilities: { getUtilities, loading } } = props
  console.log('props', props)
  return (
    <div className="utilities__container">
      {
        loading ? <div>Loading</div>
        : getUtilities && getUtilities.map((utility, i) => {
          return (
            <Utility
              key={i}
              utility={utility}
            />
          )
        })
      }
    </div>
  )
}

export const UtilitiesContainer = compose(
  graphql(getUtilities,
    { name: "getUtilities" }
  ),
  graphql(updateUtility,
    { name: "updateUtility" }
  ),
)(Utilities)
