import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.js';

ReactDOM.render(
  <StrictMode children={<App />} />, document.getElementById('root')
);