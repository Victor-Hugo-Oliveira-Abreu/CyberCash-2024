import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h1>Digital Bank</h1>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/transaction">Transaction</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
