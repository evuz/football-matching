import React from 'react';

import LoadingComponent from '@/components/Loading';
import MatchItemComponent from '@/components/MatchItemList';

import './index.css'

const MatchListComponent = ({ matchList, onItemClick, fetching }) => {
  const itemsRenderer = matchList.map((match, index) => (
    <MatchItemComponent
      onItemClick={onItemClick}
      key={index}
      match={match}
    />
  ))
  return (
    <div className="match_list_component">
      {
        fetching ?
          <LoadingComponent />
          :
          <ul>
            {itemsRenderer}
          </ul>
      }
    </div>
  )
};

export default MatchListComponent;
