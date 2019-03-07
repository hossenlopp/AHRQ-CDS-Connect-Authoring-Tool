import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

/* eslint-disable jsx-a11y/no-onchange */
export default class StringModifier extends Component {
  render() {
    const valueId = _.uniqueId('value-');

    return (
      <div className="string-modifier">
        <label htmlFor={valueId}>
          <input
            type="text"
            placeholder="enter value"
            aria-label="String Modifier"
            value={this.props.value || ''}
            onChange={(event) => { this.props.updateAppliedModifier(this.props.index, { value: event.target.value }); }}
            onSelect={(event) => { this.props.updateAppliedModifier(this.props.index, { value: event.target.value }); }}
          />
        </label>
      </div>
    );
  }
}

StringModifier.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string,
  updateAppliedModifier: PropTypes.func.isRequired
};
