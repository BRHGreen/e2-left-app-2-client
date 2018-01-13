import React from 'react';
import Dashboard from './Dashboard'
import Navbar from '../components/Navbar'
import decode from 'jwt-decode'


const App = () => {
    const currentUser = () => {
        try {
            localStorage.getItem('token')
            const token = localStorage.getItem('token');
            const user = decode(token);
            return (user);
        } catch (err) {
            return null
        }
    }
    return (
        <div>
            {currentUser() &&
            <div>
                <Navbar />
                <Dashboard />
            </div>
            }
        </div>
    )
}

export default App
