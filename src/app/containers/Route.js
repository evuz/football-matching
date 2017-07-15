import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainContainer from '@/containers/Main';
import MatchListContainer from '@/containers/MatchList';
import MatchContainer from '@/containers/Match';
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
    <Route path="/matchs" exact component={MatchListContainer} />
    <PrivateRoute path="/match/:id" exact component={MatchContainer} />
    <CreatePlayerRoute path="/createOwnPlayer" exact />
  </Switch>
);

export default RouteContainer;
