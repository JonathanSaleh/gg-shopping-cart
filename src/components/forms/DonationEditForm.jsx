import React, { Component } from 'react';
import { Input, SpacedGroup, GridCell } from '@smashgg/gg-components';
import EditFormSubmit from './EditFormSubmit';

class DonationEditForm extends Component {
    render() {
        const lineItem = this.props.lineItem;
        const changes = lineItem.get('changes');
        const priceValue = changes && changes.get('price') ? changes.get('price') : lineItem.get('price');
        return (
            <SpacedGroup className='form-input'>
                <GridCell size={1}>
                    <Input name='donation-amount' label='($) Amount' type='number' step={0.01} value={(priceValue / 100)} onChange={(e) => this.props.handleUpdateField(lineItem.get('id'), 'price', e, (value) => (value * 100))} />
                </GridCell>
                <EditFormSubmit lineItem={lineItem} handleSaveEdits={this.props.handleSaveEdits} handleCancelClick={this.props.handleCancelClick} />
            </SpacedGroup>
        );
    }
}

export default DonationEditForm;
