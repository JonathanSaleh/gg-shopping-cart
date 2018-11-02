import React, { Component } from 'react';
import Immutable from 'immutable';
import _ from 'lodash';
import { Table } from '@smashgg/gg-components';
import ImageCell from './ImageCell';
import DetailsCell from './DetailsCell';
import CostCell from './CostCell';

/**
* The main shopping cart component. Handles all state for the cart
* Takes a list of line items as a prop
*/
class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        };
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleSaveEdits = this.handleSaveEdits.bind(this);
        this.handleUpdateField = this.handleUpdateField.bind(this);
        this.DetailsCell = DetailsCell.bind(this);
    }

    /**
      * Helper function to grab the object with the provided id out of the list of items
      * @params {integer} id - The item id we want to get
      * @params {Array} id - The list of items
     */
    getItemFromId(id, items) {
        return _.find(items, {'id': id});
    }

    /**
    * Updates the attribute field on the item that matches the provided id, calling onSet on the data
    * @params {integer} id - The listItem id we are updating
    * @params {string} attributeName - The key of the attribute we are updating
    * @params {Event} event - The click event
    * @params (function) onSet - Function to mutate the attribute value on set
    */
    handleUpdateField(id, attributeName, event, onSet) {
        const item = this.getItemFromId(id, this.state.items);
        const newValue = onSet ? onSet(event.target.value) : event.target.value;

        if(!item.changes) {
            item.changes = {}
        }

        item.changes[attributeName] = newValue;
        this.setState({
            items: this.state.items
        });
    }

    /**
      * Closes the edit form for the item with the provided id
      * @params {integer} id - The item id that we are removing the form for
     */
    handleCancelClick(id) {
        const item = this.getItemFromId(id, this.state.items);
        item.isEditing = false;
        item.changes = {}
        this.setState({
            items: this.state.items
        });
    };

    /**
      * Opens the edit form for the item with the provided id
      * @params {integer} id - The item id that we are opening the form for
     */
    handleEditClick(id) {
        const item = this.getItemFromId(id, this.state.items);
        item.isEditing = true;
        this.setState({
            items: this.state.items
        });
    };

    /**
      * Removes the item with the provided id from the cart
      * @params {integer} id - The item id that we are removing
     */
    handleRemoveClick(id) {
        const newItems = this.state.items;
        _.remove(newItems, {'id': id});
        this.setState({
            items: newItems
        });
    };

    /**
      * Applies the edits to the line item and closes the form
      * @params {integer} id - The item id that we are saving edits on
     */
    handleSaveEdits(id) {
        let item = this.getItemFromId(id, this.state.items);
        const updatedItem = _.assign(item, item.changes);
        item = _.assign(updatedItem, {changes: {}, isEditing: false});

        // We could perform an API request here with the updated item data
        this.setState({
            items: this.state.items
        });
    }

    render() {
        const lineItems = Immutable.fromJS(this.state.items);
        const colMeta = Immutable.fromJS([
            {cell: ImageCell},
            {cell: this.DetailsCell},
            {cell: CostCell}
        ]);

        return (
            <Table columnMeta={colMeta} data={lineItems} emptyState={<div>Your shopping cart is empty.</div>} />
        );
    }
}

export default ShoppingCart;
