import React from 'react';
import { Navbar } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar collapseOnSelect className="justify-content-center" expand="lg" sticky="top" bg="dark" variant="dark">
            <Navbar.Brand>World War II Tank Finder</Navbar.Brand>
        </Navbar>
    )
}

export default NavBar;