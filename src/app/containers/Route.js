import React from 'react';
import { Route } from 'react-router-dom';

import PublicRoute from '@/containers/PublicRoute';
import PrivateRoute from '@/containers/PrivateRoute';
import LoginContainer from '@/containers/Login';
import RegisterContainer from '@/containers/Register';

const RouteContainer = () => (
  <div className="route">
    <PublicRoute path="/login" exact component={LoginContainer} />
    <PublicRoute path="/register" exact component={RegisterContainer} />
    <PrivateRoute path="/private" exact component={RegisterContainer} />
  </div>
);

export default RouteContainer;
