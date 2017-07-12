import React from 'react';
import { Route } from 'react-router-dom';

import LoginComponent from '@/components/Login';

const RouteContainer = () => (
  <div className="route">
    <Route path="/" exact component={LoginComponent} />
    <Route path="/login" exact component={LoginComponent} />
  </div>
);

export default RouteContainer;
