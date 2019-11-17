import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';

export default props => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand>
      <FontAwesomeIcon icon={faCalendarCheck} /> TodoApp
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavItem>
          <NavLink className='nav-link' tag={Link} to='/'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='nav-link' tag={Link} to='/about'>About</NavLink>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);