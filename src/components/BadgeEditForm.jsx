import React, { Component } from 'react';
import QuantityInput from './QuantityInput';
import EditFormSubmit from './EditFormSubmit';

class BadgeEditForm extends Component {
  render() {
        return (
            <span>
                <QuantityInput quantity={this.props.item.quantity} />
                <EditFormSubmit lineItem={this.props.item} handleCancelClick={this.props.handleCancelClick} />
            </span>
        );
    }
}

export default BadgeEditForm;
