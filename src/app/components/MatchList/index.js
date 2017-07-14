import React from 'react';

import LoadingComponent from '@/components/Loading';
import MatchItemComponent from '@/components/MatchItem';

import './index.css'

const MatchListComponent = ({ matchList }) => {
  const itemsRenderer = matchList.list.map((match) => (
    <MatchItemComponent
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
