import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'xredux';
import { Provider } from 'react-redux';
import App from './components/App';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
