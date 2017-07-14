import React from 'react';
import { connect } from 'react-redux';

import FormsDecorator from '@/components/FormsDecorator';
import RegisterFormContainer from '@/containers/RegisterForm';
import { toogleLogin } from '@/reducers/navigation';
import { registerSubmit } from '@/reducers/login';
import capitalizeFirstLetter from '@/utils/filters/capitalizeFirstLetter';

const RegisterContainer = (props) => (
  <FormsDecorator title={capitalizeFirstLetter(props.screen)}>
    <RegisterFormContainer
      onChangeScreen={props.onChangeScreen}
      onSubmit={props.onSubmit}
    />
  </FormsDecorator>
)

const mapStateToProps = (state) => ({
  screen: state.route.location.pathname.split('/')[1]
})

const mapDispatchToProps = {
  onChangeScreen: toogleLogin,
  onSubmit: registerSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
