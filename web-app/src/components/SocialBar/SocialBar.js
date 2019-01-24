import React from 'react';
import './SocialBar.css';
import { items } from './items.json';

class SocialBar extends React.Component {
  constructor() {
    super();
    this.state = {
      items
    }
  }

  componentWillUnmount() {
    this.setState({ items: [] });
  }

  render () {
    const items = this.state.items.map((item, index) => {
      return (
        <div className="col icons-container" key={index + "social"}>
          <a href={item.href} className={item.a_class} target="_blank" rel="noopener noreferrer">
            <i className={item.i_class} aria-hidden="true"></i>
          </a>
        </div>
      );
    });

    return (
      <div className="SocialBar">
        <div className="row d-flex flex-row justify-content-center">
          <h3 className="text-smoke-white font-quote-ananda">¡Síguenos!</h3>
        </div>
        <div className="row d-flex flex-row justify-content-center">
          { items }
        </div>
      </div>
    );
  }
}

export default SocialBar;
