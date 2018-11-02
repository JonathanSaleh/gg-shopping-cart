import React, { Component } from 'react';
import { Button } from '@smashgg/gg-components';

class EditFormSubmit extends Component {
    render() {
        const lineItem = this.props.lineItem;
        return (
            <div>
                <Button type='primary' label='Save' onClick={() => this.props.handleSaveEdits(lineItem.get('id'))}></Button>
                <Button type='secondary' label='Cancel' onClick={() => this.props.handleCancelClick(lineItem.get('id'))}></Button>
            </div>
        );
    }
}

export default EditFormSubmit;
