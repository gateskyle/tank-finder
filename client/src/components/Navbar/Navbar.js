import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
            <Navbar.Brand>World War II Tank Finder</Navbar.Brand>
        </Navbar>
    )
}

export default NavBar;