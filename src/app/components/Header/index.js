import React from 'react';
import { MdMenu, MdPerson } from 'react-icons/lib/md';

import './index.css';

const HeaderComponent = (props) => (
  <div className="header_component">
    <MdMenu
      onClick={props.onClickMenu}
    />
    <span>Header</span>
    {
      props.img ?
        <img
          src={props.img}
          alt={props.alt}
          onClick={props.onClickImg}
        /> :
        <MdPerson
          onClick={props.onClickImg}
        />
    }
  </div>
);

export default HeaderComponent;
