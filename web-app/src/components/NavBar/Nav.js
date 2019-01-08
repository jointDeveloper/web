import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <nav className="navbar fixed-top">
          <a className="navbar-brand" href="#">
            <h1 className="font-title"><span className="text-navy">joint</span><span className="text-pink-yarrow">Dev</span></h1>
          </a>
          <div className="content text-white">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link font-weight-bold text-white" href="#about">¿Quiénes somos?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white" href="#contact">¡Contáctanos!</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
