import React from 'react';
import { Field, reduxForm } from 'redux-form';

import InputComponent from '@/components/Input';

const CreatePlayerForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      name="name"
      component={InputComponent}
      type="text"
      placeholder="Name"
    />
    <Field
      name="description"
      component={InputComponent}
      type="textarea"
      placeholder="Description"
    />
    <Field
      name="city"
      component={InputComponent}
      type="text"
      placeholder="City"
    />
    <Field
      name="favoritePosition"
      component={InputComponent}
      type="text"
      placeholder="Favorite Position"
    />
    <div className="buttons">
      <button type="submit">
        Create
      </button>
    </div>
  </form>
)

export default reduxForm({ form: 'createPlayer' })(CreatePlayerForm)
