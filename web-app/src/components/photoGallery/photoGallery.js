import React from 'react';
import './photoGallery.css';
import { events } from './events.json';
import Carousel from '../Carousel/Carousel';

class photoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
    this.addClassName = this.addClassName.bind(this);
    this.removeClassName = this.removeClassName.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  componentDidMount() {
    this.getCoverPhotos();
    window.addEventListener('mousemove', this.onMouseOver);
  }

  componentWillUnmount() {
    this.setState({ events: [] });
    window.removeEventListener('mousemove', this.onMouseOver);
  }

  getCoverPhotos() {
    let storage = this.props.firebase.getStorage();

    events.map((event, index) => {
      let converPath = event.images_src + 'cover.jpg';
      let pathReference = storage.ref(converPath);

      pathReference.getDownloadURL().then((url) => {
        event.imageSrc = url;
        this.setState({
          events: [...this.state.events, event]
        });
      }).catch((error) => {
        console.error(error);
      });
    });
  }

  onMouseOver() {
    let imageEvent = document.getElementsByClassName('image-container');
    for (let i = 0; i < imageEvent.length; i++) {
      console.log(imageEvent[i]);
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

  addClassName(element, className) {
    console.log("addClassName");
    let classNameElement = element.className;
    let classNameArray = classNameElement.split(" ");
    console.log(classNameArray);

    if (!classNameArray.includes(className)) {
      console.log("gonna add");
      classNameElement += " " + className;
      element.className = classNameElement;
    }
  }

  removeClassName(element, className) {
    console.log("removeClassName");
    let classNameElement = element.className;
    let classNameArray = classNameElement.split(" ");
    console.log(classNameArray);

    if (classNameArray.includes(className)) {
      console.log("gonna remove");
      classNameArray.splice(-1, 1);
      classNameElement = classNameArray.join(" ");
      element.className = classNameElement;
    }
  }

  render() {
    let eventsItems = this.state.events.map((event, index) => {
      return (
        <div className="col" key={"eventsItem" + index}>
          <div className="text-center image-container">
            <img className="event-pic img-responsive rounded" alt="" src={ event.imageSrc } />
            <div className="text-centered font-weight-bold info-container hide">
              <p>{ event.title }</p>
              <p className="event-date">{ event.date }</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="photoGallery bg-flame">
        <h1 className="font-subtitle text-center text-white">Galería de Fotos</h1>
        <Carousel images={[]} />
        <div className="row">
          { eventsItems }
        </div>
      </div>
    );
  }
}

export default photoGallery;
