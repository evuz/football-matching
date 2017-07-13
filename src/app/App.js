import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '@/containers/Header';
import Route from '@/containers/Route';
import { loginWithToken } from '@/reducers/login';

import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.loginWithToken();
  }

  renderApp(initApp) {
    if (initApp) {
      return (
        <div className="app_component">
          <Header />
          <Route />
        </div>
      )
    }
    return (
      <div className="app_component">
        Loading ...
      </div>
    )
  }

  render() {
    const { app: { initApp } } = this.props;
    const app = this.renderApp(initApp);
    return (
      <div className="App">
        { app }
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  app: state.app
})

const mapDispatchToProps = {
  loginWithToken
}

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(App)));
