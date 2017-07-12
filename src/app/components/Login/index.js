import React from 'react';

import './index.css';

const LoginComponent = (props) => (
  <div className="login_component">
    <div className="login_card">
      <h3>
        { props.title || null}
      </h3>
      { props.children }
    </div>
  </div>
);

export default LoginComponent;
