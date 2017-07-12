import React from 'react';
import { Route } from 'react-router-dom';

import LoginContainer from '@/containers/Login';

const RouteContainer = () => (
  <div className="route">
    <Route path="/" exact component={LoginContainer} />
    <Route path="/login" exact component={LoginContainer} />
  </div>
);

export default RouteContainer;
