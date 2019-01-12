import React from 'react';
import './photoGallery.css';
import { events } from './events.json';
import Carousel from '../Carousel/Carousel';
import listReactFiles from 'list-react-files';

class photoGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      events
    }
  }

  componentDidMount() {
    console.log("did mount");
    listReactFiles(__dirname).then(files => console.log("----->" + files));
  }

  render() {
    let events = this.state.events.map((event, index) => {
      let __dirname = event.images_src;
      listReactFiles(__dirname).then(files => console.log("----->" + files));
      return (
        <p>{event.title}</p>
      );
    });

    return (
      <div className="photoGallery bg-flame">
        <h1 className="font-subtitle text-center text-white">Galería de Fotos</h1>
        <Carousel images={[]} />
      </div>
    );
  }
}

export default photoGallery;
