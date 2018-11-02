import React, { Component } from 'react';
import ShoppingCart from './components/ShoppingCart';
import '@smashgg/gg-components/dist/main.css';
import './App.css';
import ITEMS from './sampleData';

class App extends Component {
    render() {
        return (
            <ShoppingCart items={ITEMS} />
        );
    }
}

export default App;
