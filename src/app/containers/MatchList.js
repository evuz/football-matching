import React, { Component } from 'react';
import { connect } from 'react-redux';

import MatchListComponent from '@/components/MatchList';
import FloatingButtonComponent from '@/components/FloatingButton';
import { goMatch, goAddMatch } from '@/reducers/navigation';
import { getMatches } from '@/reducers/matchList';

class MatchListContainer extends Component {
  componentWillMount() {
    this.props.getMatches();
  }

  render() {
    return (
      <div className="body">
        <MatchListComponent
          onItemClick={this.props.onItemClick}
          matchList={this.props.matchList}
        />
        <FloatingButtonComponent
          onClick={this.props.goAddMatch}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: state.matchList.fetching,
  matchList: state.matchList.list
})

const mapDispatchToProps = {
  onItemClick: goMatch,
  goAddMatch,
  getMatches
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchListContainer);
