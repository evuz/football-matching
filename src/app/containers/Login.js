import React from 'react';
import { Route } from 'react-router-dom';

import LoginComponent from '@/components/Login';

const LoginRouteContainer = () => (
  <Route path="/login" component={LoginComponent} />
);

export default LoginRouteContainer;
