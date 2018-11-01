import React, { Component } from 'react';
import { PlainButton } from '@smashgg/gg-components';

const CostCell = lineItem => (
    <td>
        {lineItem.get('price') <= 0 ? <span>FREE</span> : <span>{'$' + (lineItem.get('price') * lineItem.get('quantity')) / 100}</span>}
    </td>
);

export default CostCell;
