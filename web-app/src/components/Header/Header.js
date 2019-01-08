import React from 'react';
import './Header.css';
import Nav from '../NavBar/Nav';

class Header extends React.Component {
  render() {
    return (
      <div className="Header container-fluid">
        <div className="row">
          <Nav />
        </div>
        <div className="row low-precedence">
          <div className="col">
            <img src={this.props.image} alt="" className="responsive-img" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
