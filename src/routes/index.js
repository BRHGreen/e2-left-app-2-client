import React from 'react'
import decode from 'jwt-decode'
import AppWithMutations from './App'
import Register from './auth/Register'
import Login from './auth/Login'
import UserProfile from './UserProfile'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  params,
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
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/" exact component={AppWithMutations} />
      <PrivateRoute path="/user-profile" exact component={UserProfile} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>
)
