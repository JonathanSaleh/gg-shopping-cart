import React, { Component } from 'react';
import { PlainButton } from '@smashgg/gg-components';
import ClothingEditForm from './ClothingEditForm';
import BadgeEditForm from './BadgeEditForm';
import DonationEditForm from './DonationEditForm';

const EditForm = (item, handleCancelClick) => {
    let type = item.get('type');
    if(type == 'clothing') {
        return <ClothingEditForm item={item} handleCancelClick={handleCancelClick} />;
    } else if(type == 'badge') {
        return <BadgeEditForm item={item} handleCancelClick={handleCancelClick} />;
    } else if(type == 'donation') {
        return <DonationEditForm item={item} handleCancelClick={handleCancelClick} />;
    } else {
        return null;
    }
};

const DetailsCell = function(lineItem) {
    const itemId = lineItem.get('id');
    return (
        <td>
            <div className="header--sm">{lineItem.get('name')}</div>
            <span>Qty. {lineItem.get('quantity')} · {lineItem.get('size')}</span>
            <PlainButton type='primary' onClick={() => this.handleEditClick(itemId)}>Edit</PlainButton>
            <PlainButton type='destructive' onClick={() => this.handleRemoveClick(itemId)}>Remove</PlainButton>
            <div>Fulfilled by {lineItem.get('fulfiller')}</div>
            {lineItem.get('isEditing') ?  EditForm(lineItem, this.handleCancelClick) : null}
        </td>
    )
}

export default DetailsCell;
