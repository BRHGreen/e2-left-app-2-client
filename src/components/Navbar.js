import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({
    getUser
}) => (
<nav>
    <ul>
        <li><Link to={'/'}>E2 Left</Link></li>
        <li><Link to={'/'}>{getUser.username}</Link></li>
        <li>Logout</li>
    </ul>
</nav>
)

export default Navbar;