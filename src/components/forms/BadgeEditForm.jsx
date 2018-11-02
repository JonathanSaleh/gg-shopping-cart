import React, { Component } from 'react';
import { GridCell, SpacedGroup } from '@smashgg/gg-components'
import QuantityInput from './QuantityInput';
import EditFormSubmit from './EditFormSubmit';

class BadgeEditForm extends Component {
    render() {
        return (
            <SpacedGroup>
                <GridCell size={1}>
                    <QuantityInput lineItem={this.props.lineItem} handleUpdateField={this.props.handleUpdateField} />
                </GridCell>
                <EditFormSubmit lineItem={this.props.lineItem} handleSaveEdits={this.props.handleSaveEdits} handleCancelClick={this.props.handleCancelClick} />
            </SpacedGroup>
        );
    }
}

export default BadgeEditForm;
