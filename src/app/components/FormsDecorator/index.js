import React from 'react';

import './index.css';

const FormsDecoratorComponent = (props) => (
  <div className="forms_decorator_component">
    <div className="forms_decorator_card">
      <h3>
        { props.title || null}
      </h3>
      { props.children }
    </div>
  </div>
);

export default FormsDecoratorComponent;
