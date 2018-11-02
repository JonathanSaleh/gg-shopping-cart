import React from 'react';
import { ImageIcon } from '@smashgg/gg-components';

const ImageCell = lineItem => (
    <td key={lineItem.get('id') + '-image'} className='image-cell' width='5%' valign='top'>
        <ImageIcon maxHeight='5em' maxWidth='5em' url={lineItem.get('imageUrl')} fallback={<div>NO IMG</div>} />
    </td>
);

export default ImageCell;
