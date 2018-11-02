import React, { Component } from 'react';
import QuantityInput from './QuantityInput';
import EditFormSubmit from './EditFormSubmit';

class BadgeEditForm extends Component {
  render() {
        return (
            <span>
                <QuantityInput lineItem={this.props.lineItem} handleUpdateField={this.props.handleUpdateField} />
                <EditFormSubmit lineItem={this.props.lineItem} handleSaveEdits={this.props.handleSaveEdits} handleCancelClick={this.props.handleCancelClick} />
            </span>
        );
    }
}

export default BadgeEditForm;
