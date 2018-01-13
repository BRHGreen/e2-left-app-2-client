import React from 'react';

const Navbar = ({
    getUser
}) => (
<nav>
    <p>Navbar</p>
    <p>{getUser.username}</p>
</nav>
)

export default Navbar;