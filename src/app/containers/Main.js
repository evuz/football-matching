import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const MainContainer = ({ user, ...rest }) => {
  return (
    <Route { ...rest }
      render={(props) => (
        !user.email || user.playerId ?
          <Redirect
            to="/matchs"
          /> :
          <Redirect
            to="/createOwnPlayer"
          />
      )}
    />
  )
};

const mapStateToProps = (state) => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps)(MainContainer));
