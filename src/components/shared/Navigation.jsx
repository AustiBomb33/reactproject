import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className="nav">
            <li>
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/About" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/Products" className="nav-link">Products</Link>
            </li>
        </ul>
    );
}

export default Navigation;