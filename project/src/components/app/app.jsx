import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import SignIn from '../sign-in/sign-in';
import Room from '../room/room';
import UnknownPage from '../unknown-page/unknown-page';

function App(props) {
  const {cardsArray} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage cardsArray={cardsArray} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room />
        </Route>
        <Route exact path={AppRoute.UnknownPage}>
          <UnknownPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cardsArray: PropTypes.array.isRequired,
};

export default App;
