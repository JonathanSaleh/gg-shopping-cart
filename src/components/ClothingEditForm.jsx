import React, { Component } from 'react';
import { List, fromJS } from 'immutable';
import { Input, Select, Button } from '@smashgg/gg-components';
import QuantityInput from './QuantityInput';
import EditFormSubmit from './EditFormSubmit';

class ClothingEditForm extends Component {
  render() {
      const sizeOptions = List(fromJS([{value: 'sm', label: 'Small'}, {value: 'md', label: 'Medium'}]));
      const lineItem = this.props.item;
        return (
            <span>
                <QuantityInput quantity={lineItem.get('quantity')} />
                <Select name='size' label='Size' options={sizeOptions}></Select>
                <Input name="custom-tag" label="Custom Tag" />
                <EditFormSubmit lineItem={lineItem} handleCancelClick={this.props.handleCancelClick} />
            </span>
        );
    }
}

export default ClothingEditForm;
