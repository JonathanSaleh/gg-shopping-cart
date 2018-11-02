import React from 'react';

const CostCell = lineItem => {
    const CostCellContent = lineItem => {
        const price = lineItem.get('price');
        if (price <= 0) {
            return <span className='body-text'>Free</span>
        } else {
            const cost = (price * lineItem.get('quantity')) / 100
            return <span>{'$' + cost}</span>
        }
    };

    return (
        <td key={lineItem.get('id') + 'cost'}>
            {CostCellContent(lineItem)}
        </td>
    )
};

export default CostCell;
