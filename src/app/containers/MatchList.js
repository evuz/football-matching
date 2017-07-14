import React, { Component } from 'react';
import { connect } from 'react-redux';

import MatchListComponent from '@/components/MatchList';
import { getMatches } from '@/reducers/matchList';

class MatchListContainer extends Component {
  componentWillMount() {
    this.props.getMatches();
  }

  render() {
    return (
      <MatchListComponent
        matchList={this.props.matchList}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  matchList: state.matchList
})

const mapDispatchToProps = {
  getMatches
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchListContainer);
