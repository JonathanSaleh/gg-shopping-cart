import React, { Component } from 'react';
import { ImageIcon } from '@smashgg/gg-components';

const ImageCell = lineItem => (
    <td>
        <ImageIcon maxHeight='5em' maxWidth='5em' url={lineItem.get('imageUrl')} fallback={<div>RIP</div>} />
    </td>
);

export default ImageCell;
