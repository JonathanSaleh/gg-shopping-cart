import React, { Component } from 'react';
import { List, fromJS } from 'immutable';
import { Input, Select, Button } from '@smashgg/gg-components';
import QuantityInput from './QuantityInput';
import EditFormSubmit from './EditFormSubmit';

class ClothingEditForm extends Component {
  render() {
      const sizeOptions = List(fromJS([{value: 'sm', label: 'Small'}, {value: 'md', label: 'Medium'}, {value: 'lg', label: 'Large'}]));
      const lineItem = this.props.lineItem;
        return (
            <span>
                <QuantityInput lineItem={lineItem} handleUpdateField={this.props.handleUpdateField} />
                <Select name='size' label='Size' options={sizeOptions} onChange={(e) => this.props.handleUpdateField(lineItem.get('id'), 'size', e)}></Select>
                <Input name="custom-tag" label="Custom Tag" value={lineItem.get('customTag')} onChange={(e) => this.props.handleUpdateField(lineItem.get('id'), 'customTag', e)}/>
                <EditFormSubmit lineItem={lineItem} handleSaveEdits={this.props.handleSaveEdits} handleCancelClick={this.props.handleCancelClick} />
            </span>
        );
    }
}

export default ClothingEditForm;
