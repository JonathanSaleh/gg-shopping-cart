import React from 'react';
import { PlainButton, SpacedGroup } from '@smashgg/gg-components';
import EditForm from './EditForm';

// A cell renderer that displays item info and provides edit forms to make changes
const DetailsCell = function(lineItem) {
    const itemId = lineItem.get('id');

    // Only renders the Editing form if the line item is being edited
    const EditingContent = (lineItem) => {
        if(lineItem.get('isEditing')) {
            return EditForm(lineItem, this.handleCancelClick, this.handleSaveEdits, this.handleUpdateField);
        }
    };

    // Only renders the size if there is a size on the line item
    const SizeContent = lineItem => {
        const size = lineItem.get('size');
        const sizeLabels = {
            'sm': 'Small',
            'md': 'Medium',
            'lg': 'Large'
        };
        if(size) {
            const rows = [];
            rows.push(<span className='ui color-gray'>·</span>);
            rows.push(<span className='ui color-gray'>{sizeLabels[size]}</span>);
            return rows;
        }
    };

    return (
        <td key={lineItem.get('id') + '-details'}>
            <SpacedGroup direction='vertical' size='sm'>
                <h4>{lineItem.get('name')}</h4>
                <SpacedGroup direction='horizontal' size='sm'>
                    <span className='ui color-gray'>Qty. {lineItem.get('quantity')}</span>
                    {SizeContent(lineItem)}
                    <PlainButton type='primary' onClick={() => this.handleEditClick(itemId)}>Edit</PlainButton>
                    <PlainButton type='destructive' onClick={() => this.handleRemoveClick(itemId)}>Remove</PlainButton>
                </SpacedGroup>
                <span className='detail-text color-gray'>Fulfilled by {lineItem.get('fulfiller')}</span>
                {EditingContent(lineItem)}
            </SpacedGroup>
        </td>
    )
}

export default DetailsCell;
