import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/lib/md';

import './index.css';

const MatchItemComponent = ({ match }) => (
  <li className="math_item_component">
    <div className="first_column">
      <div className="name">{match.name}</div>
      <div className="description">{match.description}</div>
    </div>
    <div className="second_column">
      <div className="city">{match.city}</div>
    </div>
    <MdKeyboardArrowRight style={{
      fontSize: '25px',
      color: '#757575'
    }}/>
  </li>
);

export default MatchItemComponent;
