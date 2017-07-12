import React from 'react';

import Input from '@/components/Input';

import './index.css';

const LoginComponent = () => (
  <div className="login_component">
    <div className="login_card">
      <h3>Login</h3>
      <form>
        <Input
          id="name"
          type="ẗext"
          placeholder="Jack-Edward Oliver"
        />
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
          <button>Register</button>
          <button>Log in</button>
        </div>
      </form>
    </div>
  </div>
);

export default LoginComponent;
