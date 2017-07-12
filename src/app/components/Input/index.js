import React from 'react';

import './index.css';

const InputComponent = (props) => (
  <div className="input_component">
    <input
      autoComplete="false"
      required
      id={props.name}
      type={props.type}
      placeholder={props.placeholder}
    />
    <label htmlFor={props.name}></label>
  </div>
);

export default InputComponent;
