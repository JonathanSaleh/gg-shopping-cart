import React, { Component } from 'react';
import { Input } from '@smashgg/gg-components';

class QuantityInput extends Component {
  render() {
      const quantity = this.props.quantity || 1;
    return (
        <Input name='quantity' type='number' label="Qty." min={1} value={quantity}></Input>
    );
  }
}

export default QuantityInput;
