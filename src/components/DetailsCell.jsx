import React, { Component } from 'react';
import { PlainButton, SpacedGroup } from '@smashgg/gg-components';
import ClothingEditForm from './ClothingEditForm';
import BadgeEditForm from './BadgeEditForm';
import DonationEditForm from './DonationEditForm';


const DetailsCell = function(lineItem) {
    const itemId = lineItem.get('id');
    const EditForm = (lineItem, handleCancelClick, handleSaveEdits, handleUpdateField) => {
        let type = lineItem.get('type');
        if(type === 'clothing') {
            return <ClothingEditForm lineItem={lineItem} handleCancelClick={handleCancelClick} handleSaveEdits={handleSaveEdits} handleUpdateField={handleUpdateField} />;
        } else if(type === 'badge') {
            return <BadgeEditForm lineItem={lineItem} handleCancelClick={handleCancelClick} handleSaveEdits={handleSaveEdits} handleUpdateField={handleUpdateField} />;
        } else if(type === 'donation') {
            return <DonationEditForm lineItem={lineItem} handleCancelClick={handleCancelClick} handleSaveEdits={handleSaveEdits} handleUpdateField={handleUpdateField} />;
        } else {
            return null;
        }
    };
    const EditingContent = (lineItem) => {
        if(lineItem.get('isEditing')) {
            return EditForm(lineItem, this.handleCancelClick, this.handleSaveEdits, this.handleUpdateField);
        } else {
            return null;
        }
    };
    return (
        <td key={lineItem.get('id') + 'details'}>
            <SpacedGroup direction='vertical' size='sm'>
                <div className="header--sm">{lineItem.get('name')}</div>
                <SpacedGroup direction='horizontal'>
                    <span>Qty. {lineItem.get('quantity')}</span>
                    <span>· {lineItem.get('size')}</span>
                    <PlainButton type='primary' onClick={() => this.handleEditClick(itemId)}>Edit</PlainButton>
                    <PlainButton type='destructive' onClick={() => this.handleRemoveClick(itemId)}>Remove</PlainButton>
                </SpacedGroup>
                <div>Fulfilled by {lineItem.get('fulfiller')}</div>
                {EditingContent(lineItem)}
            </SpacedGroup>
        </td>
    )
}

export default DetailsCell;