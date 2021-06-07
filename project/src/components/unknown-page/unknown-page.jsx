import React from 'react';
import { Link } from 'react-router-dom';

function UnknownPage() {
  const pageMainLinkStyle= {
    color: 'blue',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const pageMainStyle= {
    position: 'relative',
    textAlign: 'center',
  };

  return(

    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main" style={pageMainStyle}>
        <div style={pageMainLinkStyle}>
          <h1>404. City not found</h1>
          <Link   to="/">Back to the roots</Link>

        </div>
        <img src="img/lostcity.jpg" alt="Lost city" width="100%" height="100" />
      </main>
    </div>
  );
}

export default UnknownPage;
