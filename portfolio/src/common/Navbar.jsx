import React, { useState } from "react";
import { Link } from "react-router-dom";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap.min.js";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import "./common.css";
import navLogo from "./img/nav_logo.png";

function NavbarX() {
  const [collapsed, setCollapsed] = useState(
    window.innerWidth < 600 ? true : false
  );

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/'>
          <Link to='/home' className='navbar-brand'>
            <img src={navLogo} className='navbar-logo' />
            mayank_mp5
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='mx-3' />
        <Navbar.Collapse id='basic-navbar-nav' className='nav-list-container'>
          <Nav className='ml-auto'>
            <Nav.Link>
              <Link to='/home' className='nav-link'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/projects' className='nav-link'>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/explore' className='nav-link'>
                Explore
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarX;
