import React from 'react';

import LoadingComponent from '@/components/Loading';
import MatchItemComponent from '@/components/MatchItemList';

import './index.css'

const MatchListComponent = ({ matchList, onItemClick }) => {
  const itemsRenderer = matchList.list.map((match, index) => (
    <MatchItemComponent
      key={index}
      match={match}
    />
  ))
  return (
    <div className="match_list_component">
      {
        matchList.fetching ?
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
