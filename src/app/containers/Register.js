import React from 'react';
import { connect } from 'react-redux';

import LoginComponent from '@/components/Login';
import RegisterFormContainer from '@/containers/RegisterForm';
import { toogleLogin } from '@/reducers/navigation';
import { handleSubmit } from '@/reducers/login';
import capitalizeFirstLetter from '@/utils/filters/capitalizeFirstLetter';

const RegisterContainer = (props) => (
  <LoginComponent title={capitalizeFirstLetter(props.screen)}>
    <RegisterFormContainer
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
  onSubmit: handleSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
