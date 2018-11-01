import React, { Component } from 'react';
import { Table, ImageIcon, PlainButton } from '@smashgg/gg-components';
import ImageCell from './ImageCell';
import DetailsCell from './DetailsCell';
import CostCell from './CostCell';
import Immutable, { List, fromJS } from 'immutable';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        };
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.detailsCell = DetailsCell.bind(this);
    }

    handleCancelClick(id) {
        const itemIndex = this.state.items.findIndex(item => (item.id == id));
        this.state.items[itemIndex].isEditing = false;
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

    render() {
        const lineItems = Immutable.fromJS(this.state.items);
        const colMeta = Immutable.fromJS([
            {cell: ImageCell},
            {cell: this.detailsCell},
            {cell: CostCell}
        ]);

        return (
            <Table columnMeta={colMeta} data={lineItems} />
        );
    }
}

export default ShoppingCart;
