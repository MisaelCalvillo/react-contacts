import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const app = (
<BrowserRouter>
<App />
</BrowserRouter>);
// console.log(app);

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
