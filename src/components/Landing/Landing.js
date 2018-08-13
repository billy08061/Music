import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut/SignOut';
import * as routes from '../../constants/routes';
import AuthUserContext from '../AuthUserContext/AuthUserContext';



 
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import {MenuItem} from 'react-bootstrap';




const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <div>
    

<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
      <Link to={routes.LANDING}>Landing</Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;


<h1> Welcome to the Landing Page</h1>
</div>





export default Navigation;