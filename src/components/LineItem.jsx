import React, { Component } from 'react';
import { ImageIcon, PlainButton } from '@smashgg/gg-components';
import ClothingEditForm from './ClothingEditForm';
import DonationEditForm from './DonationEditForm';
import BadgeEditForm from './BadgeEditForm';

class LineItem extends Component {
  render() {
      const item = this.props.item;
      const cost = item.quantity * item.price;
      function EditForm(item) {
          let type = item.type;
          if(type == 'clothing') {
              return <ClothingEditForm item={item} />;
          } else if(type == 'badge') {
              return <BadgeEditForm item={item} />;
          } else if(type == 'donation') {
              return <DonationEditForm item={item} />;
          } else {
              return null;
          }
      };
        return (
            <td>
                <ImageIcon size="sm" url='https://images.smash.gg/images/tournament/10823/image-b4ddaf7c53ad2503c2330edda6831d20.jpg'></ImageIcon>
                <span>
                    <span>{item.name}</span>
                    <span>Qty. {item.quantity}</span>
                    <span>{item.name}</span>
                    <PlainButton type='primary'>Edit</PlainButton>
                    <PlainButton type='destructive'>Remove</PlainButton>
                    <span>{'$' + cost / 100}</span>
                    {EditForm(item)}
                </span>
            </td>
        );
    }
}

export default LineItem;
