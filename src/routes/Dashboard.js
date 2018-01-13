import React from 'react'
import { getUser } from '../graphql/user'
import { graphql, compose } from 'react-apollo'
import '../styles/app.css'


class Dashboard extends React.Component {

    render () {
        const { getUser } = this.props.data
        return (
            <div>
                {getUser &&
                  <div>
                      <h1>Hi <span className="capalaize">{getUser.username}</span></h1>
                  </div>
                }
          </div>
        )
    }
}

const DashboardWithMutations = compose(
    graphql(getUser)
)(Dashboard)

export default DashboardWithMutations


