import React, { Component } from 'react';
import { List, fromJS } from 'immutable';
import { Input, Select, SpacedGroup, GridCell } from '@smashgg/gg-components';
import QuantityInput from './QuantityInput';
import EditFormSubmit from './EditFormSubmit';

class ClothingEditForm extends Component {
    render() {
        const sizeOptions = List(fromJS([{value: 'sm', label: 'Small'}, {value: 'md', label: 'Medium'}, {value: 'lg', label: 'Large'}]));
        const lineItem = this.props.lineItem;
        const changes = lineItem.get('changes');
        const sizeValue = changes && changes.get('size') ? changes.get('size') : lineItem.get('size');
        const tagValue = changes && changes.get('customTag') ? changes.get('customTag') : lineItem.get('customTag');
        return (
            <div className='form-input'>
                <SpacedGroup direction='horizontal' size='lg'>
                    <GridCell size={1}>
                        <QuantityInput lineItem={lineItem} handleUpdateField={this.props.handleUpdateField} />
                    </GridCell>
                    <GridCell size={2}>
                        <div>
                            <Select name='size' label='Size' options={sizeOptions} value={sizeValue} onChange={(e) => this.props.handleUpdateField(lineItem.get('id'), 'size', e)}></Select>
                        </div>
                    </GridCell>
                    <GridCell size={6}>
                        <Input name="custom-tag" label="Custom Tag" value={tagValue} onChange={(e) => this.props.handleUpdateField(lineItem.get('id'), 'customTag', e)}/>
                    </GridCell>
                </SpacedGroup>
                <EditFormSubmit lineItem={lineItem} handleSaveEdits={this.props.handleSaveEdits} handleCancelClick={this.props.handleCancelClick} />
            </div>
        )
    }
}

export default ClothingEditForm;
