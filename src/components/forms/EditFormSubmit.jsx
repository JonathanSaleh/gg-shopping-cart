import React, { Component } from 'react';
import { Button, SpacedGroup } from '@smashgg/gg-components';

class EditFormSubmit extends Component {
    render() {
        const lineItem = this.props.lineItem;
        return (
            <SpacedGroup direction='horizontal' size='sm'>
                <Button className='detail-button' size='sm' label='Save' onClick={() => this.props.handleSaveEdits(lineItem.get('id'))}></Button>
                <Button className='detail-button' size='sm' type='secondary' label='Cancel' onClick={() => this.props.handleCancelClick(lineItem.get('id'))}></Button>
            </SpacedGroup>
        );
    }
}

export default EditFormSubmit;
