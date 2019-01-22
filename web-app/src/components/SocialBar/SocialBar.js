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
      let id = "item" + index.toString();
      return (
        <div key={index + "social"}>
          <li key={id + "li"}><a href={item.href} className={item.a_class} target="_blank" rel="noopener noreferrer">
            <i className={item.i_class} aria-hidden="true"></i><span>{item.name}</span>
          </a></li>
        </div>
      );
    });

    return (
      <div className="SocialBar">
        <aside id="sticky-social">
          <ul>
            { items }
          </ul>
        </aside>
      </div>
    );
  }
}

export default SocialBar;
