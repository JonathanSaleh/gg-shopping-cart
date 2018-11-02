import React from 'react';

const CostCell = lineItem => {

    // A Cell Rendered that computes the price in dollars from the price on the line item
    const CostCellContent = lineItem => {
        const price = lineItem.get('price');
        if (price <= 0) {
            return <span className='ui color-green'>Free</span>
        } else {
            const cost = (price * lineItem.get('quantity')) / 100
            return <span className='ui'>{'$' + cost.toFixed(2)}</span>
        }
    };

    return (
        <td key={lineItem.get('id') + '-cost'} align='right'>
            {CostCellContent(lineItem)}
        </td>
    )
};

export default CostCell;
