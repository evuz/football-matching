import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/lib/md';

import './index.css';

const MatchItemListComponent = ({ match, onItemClick }) => (
  <li className="math_item_list_component"
    onClick={() => onItemClick(match._id)}
  >
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
    }} />
  </li>
);

export default MatchItemListComponent;
