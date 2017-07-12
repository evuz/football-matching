import React from 'react';

import Input from '@/components/Input';

import './index.css';

const LoginComponent = (props) => (
  <div className="login_component">
    <div className="login_card">
      <h3>
        {
          props.screen === 'register' ?
            'Register' :
            'Log in'
        }
      </h3>
      <form>
        {
          props.screen === 'register' ?
            <Input
              id="name"
              type="ẗext"
              placeholder="Jack-Edward Oliver"
            /> : null
        }
        <Input
          id="username"
          type="email"
          placeholder="mrjackolai@gmail.com"
        />
        <Input
          id="password"
          type="password"
          placeholder="password"
        />
        <div className="buttons">
          <button onClick={props.onChangeScreen}>
            {props.screen === 'register' ? 'Log in' : 'Register'}
          </button>
          <button onClick={props.onSubmit}>
            {props.screen === 'register' ? 'Register' : 'Register'}
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default LoginComponent;
