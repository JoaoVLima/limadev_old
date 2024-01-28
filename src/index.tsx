import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'
import { Slider } from './components/slider';

function init() {
    const root = document.getElementById('root') as HTMLDivElement;
    ReactDOM.render(<Slider/>, root);
}
init();
