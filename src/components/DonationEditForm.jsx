import React, { Component } from 'react';
import { Input } from '@smashgg/gg-components'
import QuantityInput from './QuantityInput';
import EditFormSubmit from './EditFormSubmit';

class DonationEditForm extends Component {
  render() {
      const lineItem = this.props.lineItem;
      const changes = lineItem.get('changes');
      const priceValue = changes && changes.get('price') ? changes.get('price') : lineItem.get('price');
        return (
            <span>
                <Input label='$ Amount' type='number' value={priceValue / 100} onChange={(e) => this.props.handleUpdateField(lineItem.get('id'), 'price', e, (value) => (value * 100))} />
                <EditFormSubmit lineItem={lineItem} handleSaveEdits={this.props.handleSaveEdits} handleCancelClick={this.props.handleCancelClick} />
            </span>
        );
    }
}

export default DonationEditForm;
