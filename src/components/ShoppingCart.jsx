import React, { Component } from 'react';
import { Table, ImageIcon, PlainButton } from '@smashgg/gg-components';
import ImageCell from './ImageCell';
import DetailsCell from './DetailsCell';
import CostCell from './CostCell';
import Immutable, { List, fromJS } from 'immutable';
import _ from 'lodash'

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

    handleCancelClick(id) {
        const itemIndex = this.state.items.findIndex(item => (item.id == id));
        const item = this.state.items[itemIndex]
        item.isEditing = false;
        item.changes = {}
        this.setState({
            items: this.state.items
        });
    };

    handleEditClick(id) {
        const itemIndex = this.state.items.findIndex(item => (item.id == id));
        this.state.items[itemIndex].isEditing = true;
        this.setState({
            items: this.state.items
        });
    };

    handleRemoveClick(id) {
        this.state.items = this.state.items.filter(item => (item.id != id));
        this.setState({
            items: this.state.items
        });
    };

    handleUpdateField(id, attributeName, event, onSet) {
        const newValue = onSet ? onSet(event.target.value) : event.target.value;
        const itemIndex = this.state.items.findIndex(item => (item.id == id));
        const item = this.state.items[itemIndex];
        if(!item.changes) {
            item.changes = {}
        };
        item.changes[attributeName] = newValue;
        this.setState({
            items: this.state.items
        });
    }

    handleSaveEdits(id) {
        const itemIndex = this.state.items.findIndex(item => (item.id == id));
        const item = this.state.items[itemIndex];
        const updatedItem = _.assign(item, item.changes);
        updatedItem.changes = {};
        updatedItem.isEditing = false;
        this.state.items[itemIndex] = updatedItem;
        this.setState({
            items: this.state.items
        })
    }

    render() {
        const lineItems = Immutable.fromJS(this.state.items);
        const colMeta = Immutable.fromJS([
            {cell: ImageCell},
            {cell: this.DetailsCell},
            {cell: CostCell}
        ]);

        return (
            <Table columnMeta={colMeta} data={lineItems} />
        );
    }
}

export default ShoppingCart;
