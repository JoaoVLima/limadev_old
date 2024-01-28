import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'
import { Swiper } from './components/swiper.tsx';

function init() {
    const root = document.getElementById('root') as HTMLDivElement;
    ReactDOM.render(<Swiper/>, root);
}
init();
