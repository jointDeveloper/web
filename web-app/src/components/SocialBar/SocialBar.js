import React from 'react';
import './SocialBar.css';
import { items } from './items.json';

class SocialBar extends React.Component {
  constructor(props) {
    super(props);
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
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <img src={this.props.iconsPath + item.a_class + ".png"} alt="" className="responsive-img" />
          </a>
        </div>
      );
    });

    return (
      <div className="SocialBar">
        <div className="row d-flex flex-row justify-content-center">
          <h3 className="text-smoke-white font-quote-ananda">¡Síguenos en nuestras redes!</h3>
        </div>
        <div className="row d-flex flex-row justify-content-center">
          { items }
        </div>
      </div>
    );
  }
}

export default SocialBar;
