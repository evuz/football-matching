import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PublicRedirect = ({ component: Component, user, ...rest }) => {
  return (
    <Route { ...rest }
      render={(props) => (
        user.email ?
          <Redirect
            to="/"
          /> :
          <Component {...props} />
      )}
    />
  )
};

const mapStateToProps = (state) => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps)(PublicRedirect));
