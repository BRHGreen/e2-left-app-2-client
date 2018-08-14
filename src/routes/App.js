import React from 'react';
import Dashboard from './Dashboard'
import { graphql, compose } from 'react-apollo'
import { getUser } from '../graphql/user'

   class App extends React.Component {
        render () {
        const { getUser } = this.props.data
        return (
            <div>
                {getUser &&
                <div>
                    <Dashboard
                    getUser={getUser}
                    />
                </div>
                 }
            </div>
        )
    }
}

const AppWithMutations = compose(
    graphql(getUser)
)(App)

export default AppWithMutations