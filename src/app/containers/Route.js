import React from 'react';
import { Route } from 'react-router-dom';

import LoginContainer from '@/containers/Login';
import RegisterContainer from '@/containers/Register';

const RouteContainer = () => (
  <div className="route">
    <Route path="/login" exact component={LoginContainer} />
    <Route path="/register" exact component={RegisterContainer} />
  </div>
);

export default RouteContainer;
