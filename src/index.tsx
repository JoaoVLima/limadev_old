import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.css'
import { App } from './app.tsx';

function init() {
    const app = document.getElementById('app') as HTMLDivElement;
    const root = createRoot(app);
    root.render(<App/>);
}
init();
