import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import CreatePlayer from '@/containers/CreatePlayer';

const CreatePlayerContainer = ({ user, ...rest }) => (
  <Route { ...rest }
    render={(props) => (
      user.playerId ?
        <Redirect
          to="/"
        /> :
        <CreatePlayer />
    )}
  />
)

const mapStateToProps = (state) => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps)(CreatePlayerContainer));
