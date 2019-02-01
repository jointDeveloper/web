import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Discover.css';

class Discover extends Component {
  render() {

    const discoverData = [
      {
        "title":"Integrantes",
        "icon":"fas fa-users",
        "class_color": "text-pink-light",
        "href":"/members"
      },
      {
        "title":"Galería de fotos",
        "icon":"fas fa-images",
        "class_color": "text-navy",
        "href":"/photoGallery"
      },
      {
        "title":"Eventos",
        "icon":"fas fa-calendar-day",
        "class_color": "text-pink-yarrow",
        "href":"/events"
      },
      {
        "title":"Blog",
        "icon":"fab fa-blogger",
        "class_color": "text-flame",
        "href":"/blog"
      }
    ];

    const items = discoverData.map((item, index) => {
      return (
        <div className="col discover-item" key={index + "discover"}>
          <Link to={item.href}>
            <h2 className="text-center text-olympia font-weight-bold">{item.title}</h2>
            <div className="d-flex justify-content-center">
              <i className={"font-weight-bold " + item.class_color + " " + item.icon}></i>
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
