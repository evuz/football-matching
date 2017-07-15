import React, { Component } from 'react';
import { connect } from 'react-redux';

import MatchListComponent from '@/components/MatchList';
import { goMatch } from '@/reducers/navigation';
import { getMatches } from '@/reducers/matchList';

class MatchListContainer extends Component {
  componentWillMount() {
    this.props.getMatches();
  }

  render() {
    return (
      <MatchListComponent
        onItemClick={this.props.onItemClick}
        matchList={this.props.matchList}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: state.matchList.fetching,
  matchList: state.matchList.list
})

const mapDispatchToProps = {
  onItemClick: goMatch,
  getMatches
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchListContainer);
