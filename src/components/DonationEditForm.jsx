import React, { Component } from 'react';
import { Input } from '@smashgg/gg-components'
import QuantityInput from './QuantityInput';
import EditFormSubmit from './EditFormSubmit';

class DonationEditForm extends Component {
  render() {
      const price = this.props.item.price;
        return (
            <span>
                <span>$</span>
                <Input label='Amount' type='number' value={price / 100}/>
                <EditFormSubmit lineItem={this.props.item} handleCancelClick={this.props.handleCancelClick} />
            </span>
        );
    }
}

export default DonationEditForm;
