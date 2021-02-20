import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import styles from "./NavBar.module.css";

function MyNavBar({ sections }) {

    const NavBarButtons = () => Object.keys(sections).map(
        (section, i) => <Nav.Link key={i} onClick={() => window.scrollTo({ behavior: "smooth", top: sections[section].ref.current.offsetTop })} >{section}</Nav.Link>
    )

    return (
        <Navbar fixed="top" sticky="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand className={styles.brand} onClick={() => window.scrollTo({behavior: "smooth", top: 0})}>Antonin J.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    {NavBarButtons()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavBar