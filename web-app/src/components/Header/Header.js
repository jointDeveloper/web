import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header container-fluid">
        <div className="row">
          <div className="col">
            <img src={this.props.image} alt="" className="responsive-img" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
