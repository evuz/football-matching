import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '@/containers/Header';
import Route from '@/containers/Route';
import { loginWithToken } from '@/reducers/login';

import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.loginWithToken();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route />
      </div>)
  }
};

const mapDispatchToProps = {
  loginWithToken
}

export default connect(null, mapDispatchToProps)(App);
