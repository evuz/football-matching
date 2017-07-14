import React from 'react';
import { connect } from 'react-redux';

import FormsDecoratorComponent from '@/components/FormsDecorator';
import CreatePlayerForm from '@/containers/CreatePlayerForm';
import MatchListContainer from '@/containers/MatchList';
import { createPlayerSubmit } from '@/reducers/user';
import capitalizeFirstLetter from '@/utils/filters/capitalizeFirstLetter';

const CreatePlayerContainer = (props) => (
  <div className="body">
    <FormsDecoratorComponent title={capitalizeFirstLetter(props.screen)}>
      <CreatePlayerForm
        onChangeScreen={props.onChangeScreen}
        onSubmit={props.onSubmit}
      />
    </FormsDecoratorComponent>
    <MatchListContainer />
  </div>
)

const mapStateToProps = (state) => ({
  screen: 'Create Player'
})

const mapDispatchToProps = {
  onSubmit: createPlayerSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayerContainer);
