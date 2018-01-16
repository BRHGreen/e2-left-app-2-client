import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../graphql/user'
import { graphql, compose } from 'react-apollo'


const Navbar = ({
    user
}) => (
<nav>
    {user.getUser &&
    <ul>
        <li><Link to={'/'}>E2 Left</Link></li>
        <li><Link to={'/user-profile'}>{user.getUser.username}</Link></li>
        <li>Logout</li>
    </ul>
    }   
</nav>
)

const NavbarWithMutations = compose(
    graphql(getUser, { name: "user" })
)(Navbar)

export default NavbarWithMutations;