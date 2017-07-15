import React, { Component } from 'react';
import { connect } from 'react-redux';

import MatchComponent from '@/components/Match';
import { getMatch } from '@/reducers/matchList';

class MatchContainer extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getMatch(id);
  }
  render() {
    return (
      <MatchComponent
        fetching={this.props.fetching}
        matchSelect={this.props.matchSelect}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: state.matchList.fetching,
  matchSelect: state.matchList.matchSelect
})

const mapDispatchToState = {
  getMatch
}

export default connect(mapStateToProps, mapDispatchToState)(MatchContainer);
