import React from 'react';
import './photoGallery.css';
import { events } from './events.json';
import Carousel from '../Carousel/Carousel';

class photoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      carouselImages: [],
      eventsItems: [],
      i: 0,
      j: -1
    }
  }

  componentDidMount() {
    this.getCoverPhotos();
    window.addEventListener('mousemove', this.onMouseOver);
  }

  componentWillUnmount() {
    this.setState({ events: [], carouselImages: [], eventsItems: [] });
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

        if (this.state.events.length <= 4) {
          let item = (
            <div className="col event-container active" key={"eventItem" + i}>
                <div className="text-center image-container" onClick={(e) => this.getCarouselImages(e, events[i])}>
                  <img className="event-pic img-responsive rounded carousel-img" alt="" src={ events[i].imageSrc } />
                  <div className="text-centered font-weight-bold info-container hide">
                    <p>{ events[i].title }</p>
                    <p className="event-date">{ events[i].date }</p>
                  </div>
              </div>
            </div>
          );
          this.setState({
            eventsItems: [...this.state.eventsItems, item],
            j: this.state.j + 1
          });
        }

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

  getCarouselImages = (e, eventItem) => {
    e.preventDefault();
    let images = [];
    images.push(eventItem.images_src + "cover.jpg");
    for (let i = 1; i <= eventItem.items; i++) {
      images.push(eventItem.images_src + i + ".jpg");
    }
    this.updateCarouselImages(images);
  }

  updateCarouselImages = async (newImages) => {
    let storage = this.props.firebase.getStorage();
    await this.setState({ carouselImages: [] });

    for (let i = 0; i < newImages.length; i++) {
      let pathReference = storage.ref(newImages[i]);

      pathReference.getDownloadURL().then((url) => {
        this.setState({
          carouselImages: [...this.state.carouselImages, url]
        });
      }).catch((error) => {
        console.error(error);
      });
    }
  }

  showPrevElement = () => {
    let size = this.state.events.length;
    let i = this.state.i;
    let j = this.state.j;
    i += 1;
    j += 1;
    let new_i = (i > (size - 1) ? 0 : i);
    let new_j = (j > (size - 1) ? 0 : j);
    // removes first element of eventsItems and get the next element of events
    let eventsItems = this.state.eventsItems;
    eventsItems.shift();
    eventsItems.push(this.getEventItem(new_j));
    this.setState({
      i: new_i,
      j: new_j,
      eventsItems
    });
  }

  showNextElement = () => {
    let size = this.state.events.length;
    let i = this.state.i;
    let j = this.state.j;
    i -= 1;
    j -= 1;
    let new_i = (i < 0 ? (size - 1) : i);
    let new_j = (j < 0 ? (size - 1) : j);
    // removes last element of eventsItems and get a new element from events
    let eventsItems = this.state.eventsItems;
    eventsItems.pop();
    eventsItems.unshift(this.getEventItem(new_i));
    this.setState({
      i: new_i,
      j: new_j,
      eventsItems
    });
  }

  getEventItem = (index) => {
    let events = this.state.events;
    let item = (
      <div className="col event-container active" key={"eventItem" + index}>
          <div className="text-center image-container" onClick={(e) => this.getCarouselImages(e, events[index])}>
            <img className="event-pic img-responsive rounded carousel-img" alt="" src={ events[index].imageSrc } />
            <div className="text-centered font-weight-bold info-container hide">
              <p>{ events[index].title }</p>
              <p className="event-date">{ events[index].date }</p>
            </div>
        </div>
      </div>
    );

    return item;
  }

  render() {
    let imagesItems = this.state.carouselImages.map((image, index) => {
      let classNameAux = "carousel-item";
      classNameAux += index === 0 ? " active" : "";
      return (
        <div className={ classNameAux } key={index + "carousel"}>
          <img className="d-block carousel-img" src={ image } alt="" />
        </div>
      );
    });

    return (
      <div className="photoGallery bg-pink-yarrow-gradient">
        <h1 className="font-title text-center text-white">Galería de Fotos</h1>
        <Carousel images={ imagesItems }
                  carouselId="carouselPhotos"
                  isMultipleCarousel={ false }
                  showPrevElement={ this.showPrevElement }
                  showNextElement={ this.showNextElement }
                  firebase={ this.props.firebase }
        />
        <div className="row">
          <Carousel images={ this.state.eventsItems }
                    carouselId="carouselEvents"
                    isMultipleCarousel={ true }
                    showPrevElement={ this.showPrevElement }
                    showNextElement={ this.showNextElement }
                    firebase={ this.props.firebase }
          />
        </div>
      </div>
    );
  }
}

export default photoGallery;
