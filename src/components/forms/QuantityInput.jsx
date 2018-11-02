import React, { Component } from 'react';
import { Input } from '@smashgg/gg-components';

class QuantityInput extends Component {
    render() {
        const lineItem = this.props.lineItem;
        const changes = lineItem.get('changes');
        const quantityValue = changes && changes.get('quantity') ? changes.get('quantity') : lineItem.get('quantity');
        return (
            <Input name='quantity' type='number' label="Qty." min={1} value={quantityValue} onChange={(e) => this.props.handleUpdateField(lineItem.get('id'), 'quantity', e)}></Input>
        );
    }
}

export default QuantityInput;
