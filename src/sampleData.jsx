// Sample data  to emulate a line item source. Make changes here to see how the cart renders for different item types
const ITEMS = [
    {
        id: 1,
        name: 'Clothing Item',
        price: 3000,
        quantity: 2,
        type: 'clothing',
        imageUrl: 'https://images.smash.gg/images/tournament/10823/image-b4ddaf7c53ad2503c2330edda6831d20.jpg',
        size: 'md',
        fulfiller: 'smash.gg'
    },
    {
        name: 'Badge Item',
        price: 219,
        quantity: 1,
        type: 'badge',
        id: 2,
        fulfiller: 'smash.gg'
    },
    {
        name: 'Donation Item',
        quantity: 1,
        price: 2000,
        type: 'donation',
        id: 3,
        fulfiller: 'smash.gg'
    },
    {
        name: 'Clothing Item 2',
        price: 0,
        quantity: 5,
        type: 'clothing',
        id: 4,
        imageUrl: 'https://images.smash.gg/images/tournament/10823/image-b4ddaf7c53ad2503c2330edda6831d20.jpg',
        size: 'sm',
        fulfiller: 'smash.gg'
    }
];

export default ITEMS;
