import React from 'react';
import './Header.css';
import Nav from '../NavBar/Nav';

class Header extends React.Component {
  render() {
    return (
      <div className="Header container-fluid d-flex flex-column justify-content-center">
        <div className="row">
          <Nav />
        </div>
        <div className="row align-self-center">
          <div className="col">
            <img src={this.props.image} alt="" className="responsive-img" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
