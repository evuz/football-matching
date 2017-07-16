import React from 'react';

import { MdAdd } from 'react-icons/lib/md';

import './index.css';

const FloatingButtonComponent = (props) => (
  <div className="floating_button_component"
    style={props.style}
    onClick={props.onClick}
  >
    <MdAdd style={Object.assign({}, styles.icon, props.iconStyle)} />
  </div>
);

const styles = {
  icon: {
    color: 'white'
  }
}

export default FloatingButtonComponent;
