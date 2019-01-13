import React from 'react';
import './photoGallery.css';
import { events } from './events.json';
import Carousel from '../Carousel/Carousel';

class photoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events
    }
  }

  componentDidMount() {
    // Create a reference with an initial file path and name
    let storage = this.props.firebase.getStorage();
    let pathReference = storage.ref('events/jointdevkids/cover.jpg');

    pathReference.getDownloadURL().then(function(url) {
             var test = url;
             console.log(url);
             let img = document.getElementById('img');
             img.src = test;
         }).catch(function(error) {
           console.log(error);
         });
    console.log(pathReference);
    console.log(pathReference.getDownloadURL());
  }

  render() {
    let events = this.state.events.map((event, index) => {
      return (
        <p>{event.title}</p>
      );
    });

    return (
      <div className="photoGallery bg-flame">
        <h1 className="font-subtitle text-center text-white">Galería de Fotos</h1>
        <Carousel images={[]} />
        <img src="test" height="125px" width="200px" id="img" />
      </div>
    );
  }
}

export default photoGallery;
