import React from 'react';
import { Field, reduxForm } from 'redux-form';

import InputComponent from '@/components/Input';

const LoginForm = (props) => (
  <form onSubmit={props.handldeSubmit}>
    <Field
      name="username"
      component={InputComponent}
      type="email"
      placeholder="mrjackolai@gmail.com"
    />
    <Field
      name="password"
      component={InputComponent}
      type="password"
      placeholder="password"
    />
    <div className="buttons">
      <button onClick={props.onChangeScreen}>
        Register
      </button>
      <button type="submit">
        Log in
      </button>
    </div>
  </form>
)

export default reduxForm({ form: 'register' })(LoginForm)
