import React, { Component } from 'react';
import './Discover.css';

class Discover extends Component {
  render() {

    const discoverData = [
      {
        "title":"Integrantes",
        "icon":"fas fa-users",
        "href":"#"
      },
      {
        "title":"Galería de fotos",
        "icon":"fas fa-images",
        "href":"#"
      },
      {
        "title":"Eventos",
        "icon":"fas fa-calendar-day",
        "href":"#"
      },
      {
        "title":"Blog",
        "icon":"fab fa-blogger",
        "href":"#"
      }
    ];

    const items = discoverData.map((item, index) => {
      return (
        <div className="col" key={index + "discover"}>
          <a href={item.href}>
            <h2 className="text-smoke-white">{item.title}</h2>
            <i className={"text-smoke-white " + item.icon}></i>
          </a>
        </div>
      )
    });

    return (
      <div className="Discover container-fluid bg-flame" id="discover">
        <div className="row align-middle">
          {items}
        </div>
      </div>
    );
  }
}

export default Discover;
