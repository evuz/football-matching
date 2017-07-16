import React from 'react';
import {
  MdDirections,
  MdLocationCity,
  MdDetails,
  MdGroupWork,
  MdAttachMoney,
  MdDateRange
} from 'react-icons/lib/md';

import FormDecorator from '@/components/FormsDecorator';
import LoadingComponent from '@/components/Loading';

import './index.css';

const MatchComponent = ({ fetching, matchSelect }) => (
  fetching ?
    <LoadingComponent /> :
    <FormDecorator title={matchSelect.name}>
      <div className="match_component">
        <div className="row">
          <div className="colum element description">
            <MdDetails style={styles.icon} />
            {matchSelect.description}
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="element direction">
              <MdDirections style={styles.icon} />
              {matchSelect.direction}
            </div>
            <div className="element city">
              <MdLocationCity style={styles.icon} />
              {matchSelect.city}
            </div>
          </div>
          <div className="date element column">
            <MdDateRange
              style={Object.assign({}, styles.icon, styles.iconDate)}
            />
            {new Date(matchSelect.date).toLocaleString()}
          </div>
        </div>
        <div className="row">
          <div className="players_by_team element column">
            <MdGroupWork style={styles.icon} />
            {matchSelect.playersByTeam} players/team
          </div>
          <div className="price element column">
            <MdAttachMoney style={styles.icon} />
            {matchSelect.priceType ?
              `${matchSelect.price} € ${matchSelect.priceType || 'by player'}` :
              'FREE'
            }
          </div>
        </div>
      </div>
    </FormDecorator>
);

const styles = {
  icon: {
    marginRight: '5px',
    color: '#FF7178'
  },
  iconDate: {
    fontSize: '30px',
    marginRight: '10px'
  }
}

export default MatchComponent;
