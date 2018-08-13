import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import LandingPage from "../Landing/Landing";
import SignUpPage from "../SignUp/SignUp";
import SignInPage from "../SignIn/SignIn";
import PasswordForgetPage from "../PasswordForget/PasswordForget";
import HomePage from "../Home/Home";
import AccountPage from "../Account/Account";
import withAuthentication from "../withAuthentication/withAuthentication";
import Entry from "../../components/Entry/Entry";


import * as routes from "../../constants/routes";

const App = () => (
  <Router>
    <div>
    
    <Route exact path="/" render={() => (
    <Redirect to="/entry"/>
)}/>
      
      
      <Route exact path={routes.ENTRY} component={Entry} />
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
    </div>
  </Router>
);

export default withAuthentication(App);
