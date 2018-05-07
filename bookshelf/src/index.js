import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const app = (<App />);
// console.log(app);

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
