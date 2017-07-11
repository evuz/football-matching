import React from 'react';

import Input from '@/components/Input';

import './index.css';

const LoginComponent = () => (
  <div className="login_component">
    <div className="login_card">
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
        <button>Log in</button>
      </form>
    </div>
  </div>
);

export default LoginComponent;
