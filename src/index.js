import { hydrate, render } from 'react-dom';
import { App } from './app.js';
import React, { StrictMode } from 'react';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<StrictMode> <App /></StrictMode>, rootElement);
} else {
  render(<StrictMode> <App /></StrictMode>, rootElement);
}
