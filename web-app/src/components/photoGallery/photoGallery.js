import React from 'react';
import './photoGallery.css';
import { events } from './events.json';
import Carousel from '../Carousel/Carousel';

class photoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      carouselImages: []
    }
  }

  componentDidMount() {
    this.getCoverPhotos();
    window.addEventListener('mousemove', this.onMouseOver);
  }

  componentWillUnmount() {
    this.setState({ events: [], carouselImages: [] });
    window.removeEventListener('mousemove', this.onMouseOver);
  }

  getCoverPhotos = () => {
    let storage = this.props.firebase.getStorage();

    for (let i = 0; i < events.length; i++) {
      let converPath = events[i].images_src + 'cover.jpg';
      let pathReference = storage.ref(converPath);

      pathReference.getDownloadURL().then((url) => {
        events[i].imageSrc = url;
        this.setState({
          events: [...this.state.events, events[i]]
        });
      }).catch((error) => {
        console.error(error);
      });
    }
  }

  onMouseOver = () => {
    let imageEvent = document.getElementsByClassName('image-container');
    for (let i = 0; i < imageEvent.length; i++) {
      // console.log(imageEvent[i]);
      imageEvent[i].addEventListener('mouseover', (event) => {
        // console.log(imageEvent[i].childNodes[1]);
        this.removeClassName(imageEvent[i].childNodes[1], "hide");
        this.addClassName(imageEvent[i].childNodes[1], "show");
      });

      imageEvent[i].addEventListener('mouseout', (event) => {
        // console.log(imageEvent[i].childNodes[1]);
        this.removeClassName(imageEvent[i].childNodes[1], "show");
        this.addClassName(imageEvent[i].childNodes[1], "hide");
      });
    }
  }

  addClassName = (element, className) => {
    let classNameElement = element.className;
    let classNameArray = classNameElement.split(" ");

    if (!classNameArray.includes(className)) {
      classNameElement += " " + className;
      element.className = classNameElement;
    }
  }

  removeClassName = (element, className) => {
    let classNameElement = element.className;
    let classNameArray = classNameElement.split(" ");

    if (classNameArray.includes(className)) {
      classNameArray.splice(-1, 1);
      classNameElement = classNameArray.join(" ");
      element.className = classNameElement;
    }
  }

  showImages = (e, eventItem) => {
    e.preventDefault();
    let images = [];
    images.push(eventItem.images_src + "cover.jpg");
    for (let i = 1; i <= eventItem.items; i++) {
      images.push(eventItem.images_src + i + ".jpg");
    }
    this.setState({ carouselImages: images });
  }

  render() {
    let eventsItems = this.state.events.map((event, index) => {
      return (
        <div className="col event-container" key={"eventsItem" + index}>
          <div className="text-center image-container" onClick={(e) => this.showImages(e, event)}>
            <img className="event-pic img-responsive rounded" alt="" src={ event.imageSrc } />
            <div className="text-centered font-weight-bold info-container hide">
              <p>{ event.title }</p>
              <p className="event-date">{ event.date }</p>
            </div>
          </div>
        </div>
      );
    });

    let eventsItemsAux = [];
    let max, size = eventsItems.length;
    for (let i = 0; i < size; i += 4) {
      max = eventsItems.length < 4 ? eventsItems.length : 4;
      eventsItemsAux.push(eventsItems.splice(0, max));
    }

    const rowsOfEvents = eventsItemsAux.map((eventRow, index) => {
      return (
        <div className="row event-row" key={index + "eventRow"}>
          { eventRow }
        </div>
      );
    });

    return (
      <div className="photoGallery bg-pink-yarrow-gradient">
        <h1 className="font-title text-center text-white">Galería de Fotos</h1>
        <Carousel images={this.state.carouselImages} firebase={this.props.firebase} />
        { rowsOfEvents }
      </div>
    );
  }
}

export default photoGallery;
