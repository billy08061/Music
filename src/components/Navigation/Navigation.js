import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut/SignOut';
import * as routes from '../../constants/routes';
import AuthUserContext from '../AuthUserContext/AuthUserContext';



 
import { Navbar } from 'react-bootstrap';

import { NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import '../SignIn/SignIn.css'; 





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
  <div className = "navbar-done">
    

<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/entry">LocalEDM</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
       
      </NavItem>
      <NavItem eventKey={2} href="#">
        
      </NavItem>
      
        
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
      <Link to={routes.LANDING}>Landing</Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <Link to={routes.SIGN_IN}>Sign In</Link>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>





export default Navigation;