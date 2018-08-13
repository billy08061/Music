import React from 'react';

import withAuthorization from '../withAuthorization/withAuthorization';
import Navigation from '../Navigation/Navigation'; 

const HomePage = () =>
  <div>
 <Navigation /> 
  
  
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  
  
  </div>



const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);