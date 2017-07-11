import React from 'react';
import { MdMenu, MdPerson } from 'react-icons/lib/md';

import './index.css';

const HeaderComponent = (props) => (
  <div className="header_component">
    <MdMenu
      onClick={props.onClickMenu}
    />
    <span>Header</span>
    <MdPerson
      onClick={props.onClickLogin}
    />
  </div>
);

export default HeaderComponent;
