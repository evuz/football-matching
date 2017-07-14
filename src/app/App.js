import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '@/components/Loading';
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
        <div className="App">
          <Header />
          <Route />
        </div>
      )
    }
    return (
      <div className="App">
        <Loading />
      </div>
    )
  }

  render() {
    const { app: { initApp } } = this.props;
    const appRenderer = this.renderApp(initApp);
    return appRenderer;
  }
};

const mapStateToProps = (state) => ({
  app: state.app
})

const mapDispatchToProps = {
  loginWithToken
}

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(App)));
