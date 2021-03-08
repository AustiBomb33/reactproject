import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Brand href="/About">About</Navbar.Brand>
            <Navbar.Brand href="/Products">Products</Navbar.Brand>
        </Navbar>
    );
}

export default Navigation;