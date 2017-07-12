import React from 'react';
import { connect } from 'react-redux';

import LoginComponent from '@/components/Login';
import LoginFormContainer from '@/containers/LoginForm';
import { toogleLogin } from '@/reducers/navigation';
import { loginSubmit } from '@/reducers/login';
import capitalizeFirstLetter from '@/utils/filters/capitalizeFirstLetter';

const LoginContainer = (props) => (
  <LoginComponent title={capitalizeFirstLetter(props.screen)}>
    <LoginFormContainer
      onChangeScreen={props.onChangeScreen}
      onSubmit={props.onSubmit}
    />
  </LoginComponent>
)

const mapStateToProps = (state) => ({
  screen: state.route.location.pathname.split('/')[1]
})

const mapDispatchToProps = {
  onChangeScreen: toogleLogin,
  onSubmit: loginSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
