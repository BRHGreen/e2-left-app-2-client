import React from 'react'

import '../styles/app.css'


class Dashboard extends React.Component {

    render () {
        const { getUser } = this.props
        return (
            <div>
                {getUser &&
                  <div className="page-content">
                      <h1>Hi <span className="capalaize">{getUser.username}</span></h1>
                  </div>
                }
          </div>
        )
    }
}

export default Dashboard


