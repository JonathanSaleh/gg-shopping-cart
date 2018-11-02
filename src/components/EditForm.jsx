import React from 'react';
import ClothingEditForm from './forms/ClothingEditForm';
import BadgeEditForm from './forms/BadgeEditForm';
import DonationEditForm from './forms/DonationEditForm';

/**
  * The form to make edits to line items in the cart
  * Conditionally renders a form based on the line item type
 */
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

export default EditForm;
