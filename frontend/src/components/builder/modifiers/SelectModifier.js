import React, { Component } from 'react';
import Select from 'react-select';
import _ from 'lodash';

class SelectModifier extends Component {
  handleChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    this.props.updateAppliedModifier(this.props.index, { value, templateName: value });
  }

  render() {
    const selectId = _.uniqueId('select-');
    const options = this.props.options.map(option => ({ value: option.name, label: option.description }));
    return (
      <div>
        <label htmlFor={selectId}>
          <Select
            name={this.props.name}
            aria-label={this.props.name}
            id={selectId}
            value={this.props.value}
            placeholder={this.props.name}
            onChange={this.handleChange}
            options={options}
          />
        </label>
      </div>
    );
  }
}

export default SelectModifier;
