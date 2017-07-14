import React from 'react';
import { connect } from 'react-redux';

import FormsDecoratorComponent from '@/components/FormsDecorator';
import LoginFormContainer from '@/containers/LoginForm';
import MatchListContainer from '@/containers/MatchList';
import { toogleLogin } from '@/reducers/navigation';
import { loginSubmit } from '@/reducers/login';
import capitalizeFirstLetter from '@/utils/filters/capitalizeFirstLetter';

const LoginContainer = (props) => (
  <div className="body">
    <FormsDecoratorComponent title={capitalizeFirstLetter(props.screen)}>
      <LoginFormContainer
        onChangeScreen={props.onChangeScreen}
        onSubmit={props.onSubmit}
      />
    </FormsDecoratorComponent>
    <MatchListContainer />
  </div>
)

const mapStateToProps = (state) => ({
  screen: state.route.location.pathname.split('/')[1]
})

const mapDispatchToProps = {
  onChangeScreen: toogleLogin,
  onSubmit: loginSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
