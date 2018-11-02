import React, { Component } from 'react';
import { Button, SpacedGroup } from '@smashgg/gg-components';

class EditFormSubmit extends Component {
    render() {
        const lineItem = this.props.lineItem;
        return (
            <SpacedGroup direction='horizontal' size='sm'>
                <Button size='sm' label='Save' onClick={() => this.props.handleSaveEdits(lineItem.get('id'))}></Button>
                <Button size='sm' type='secondary' label='Cancel' onClick={() => this.props.handleCancelClick(lineItem.get('id'))}></Button>
            </SpacedGroup>
        );
    }
}

export default EditFormSubmit;
