import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  CARDS_ARRAY: [1, 2, 3, 4, 5],
};

ReactDOM.render(
  <React.StrictMode>
    <App
      cardsArray={Settings.CARDS_ARRAY}
    />
  </React.StrictMode>,
  document.getElementById('root'));
