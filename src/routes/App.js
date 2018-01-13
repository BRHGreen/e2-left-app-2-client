import React from 'react';
import Dashboard from './Dashboard'
import Navbar from '../components/Navbar'
import { graphql, compose } from 'react-apollo'
import { getUser } from '../graphql/user'

   class App extends React.Component {
        render () {
        const { getUser } = this.props.data
        return (
            <div>
                {getUser &&
                <div>
                    <Navbar 
                    getUser={getUser}
                    />
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