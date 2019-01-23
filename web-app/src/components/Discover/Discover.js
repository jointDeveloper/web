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
        <div className="col discover-item" key={index + "discover"}>
          <Link to={item.href}>
            <h2 className="text-center text-olympia font-weight-bold">{item.title}</h2>
            <div className="d-flex justify-content-center">
              <i className={"text-olympia font-weight-bold " + item.icon}></i>
            </div>
          </Link>
        </div>
      )
    });

    return (
      <div className="Discover container-fluid d-flex flex-row justify-content-center" id="discover">
        <div className="row align-self-center">
          {items}
        </div>
      </div>
    );
  }
}

export default Discover;
