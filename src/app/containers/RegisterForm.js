import React from 'react';
import { Field, reduxForm } from 'redux-form';

import InputComponent from '@/components/Input';

const RegisterForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      name="name"
      component={InputComponent}
      type="ẗext"
      placeholder="Jack-Edward Oliver"
    />
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
        Log in
      </button>
      <button type="submit">
        Register
      </button>
    </div>
  </form>
)

export default reduxForm({ form: 'register' })(RegisterForm)
