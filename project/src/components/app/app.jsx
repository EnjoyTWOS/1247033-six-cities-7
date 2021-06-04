import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

function App(props) {
  const {cardsArray} = props;

  return (
    <MainPage cardsArray={cardsArray} />
  );
}

App.propTypes = {
  cardsArray: PropTypes.array.isRequired,
};

export default App;
