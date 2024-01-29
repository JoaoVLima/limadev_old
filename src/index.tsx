import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'
import { App } from './app.tsx';

function init() {
    const app = document.getElementById('app') as HTMLDivElement;
    ReactDOM.render(<App/>, app);
}
init();
