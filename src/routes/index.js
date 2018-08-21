import React from 'react'
import decode from 'jwt-decode'
import AppWithMutations from './App'
import Register from './auth/Register'
import Login from './auth/Login'
import UserProfile from './UserProfile'
import Navbar from '../components/Navbar'
import Kitchen from '../components/Kitchen/Kitchen'
import TopFloorPlan from '../components/FloorPlan/TopFloorPlan'
import GroundFloorPlan from '../components/FloorPlan/GroundFloorPlan'
import { MainlandWestCupboardsContainer } from '../components/Kitchen/Cupboards/MainlandWestCupboards'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken')
  try {
    decode(token);
    decode(refreshToken);
  } catch (err) {
    return false
  }
  return true;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      ))}
  />
);

export default () =>(
  <Router>
    <div>
      <Route component={Navbar} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/" exact component={AppWithMutations} />
      <PrivateRoute path="/user-profile" exact component={UserProfile} />
      <PrivateRoute path="/kitchen" exact component={Kitchen} />
      <PrivateRoute path="/kitchen/mainland-west" exact component={MainlandWestCupboardsContainer} />
      <PrivateRoute path="/ground-floor-plan" exact component={GroundFloorPlan} />
      <PrivateRoute path="/top-floor-plan" exact component={TopFloorPlan} />
    </div>
  </Router>
)
