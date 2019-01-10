import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Discover.css';

class Discover extends Component {
  render() {

    const discoverData = [
      {
        "title":"Integrantes",
        "icon":"fas fa-users",
        "href":"/members"
      },
      {
        "title":"Galería de fotos",
        "icon":"fas fa-images",
        "href":"/photoGallery"
      },
      {
        "title":"Eventos",
        "icon":"fas fa-calendar-day",
        "href":"/events"
      },
      {
        "title":"Blog",
        "icon":"fab fa-blogger",
        "href":"/blog"
      }
    ];

    const items = discoverData.map((item, index) => {
      return (
        <div className="col" key={index + "discover"}>
          <Link to={item.href}>
            <h2 className="text-smoke-white">{item.title}</h2>
            <i className={"text-smoke-white " + item.icon}></i>
          </Link>
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
