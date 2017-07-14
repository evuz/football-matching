import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainContainer from '@/containers/Main';
import MatchListContainer from '@/containers/MatchList';
import PublicRoute from '@/containers/PublicRoute';
import PrivateRoute from '@/containers/PrivateRoute';
import CreatePlayerRoute from '@/containers/CreatePlayerRoute';
import LoginContainer from '@/containers/Login';
import RegisterContainer from '@/containers/Register';

const RouteContainer = () => (
  <Switch>
    <MainContainer path="/" exact />
    <PublicRoute path="/login" exact component={LoginContainer} />
    <PublicRoute path="/register" exact component={RegisterContainer} />
    <PrivateRoute path="/private" exact component={RegisterContainer} />
    <Route path="/matchs" exact component={MatchListContainer} />
    <CreatePlayerRoute path="/createOwnPlayer" exact />
  </Switch>
);

export default RouteContainer;
