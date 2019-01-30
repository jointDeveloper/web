import React from 'react';
import './Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselImages: []
    }
  }

  componentWillUnmount() {
    this.setState({ carouselImages: [] });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.images !== nextProps.images) {
      this.updateCarouselImages(nextProps.images);
    }
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

  render() {
    let images = this.state.carouselImages.map((image, index) => {
      let classNameAux = "carousel-item";
      classNameAux += index === 0 ? " active" : "";
      return (
        <div className={classNameAux} key={index + "carousel"}>
          <img className="d-block carousel-img" src={image} alt="" />
        </div>
      );
    });

    return (
      <div className="Carousel d-flex justify-content-center">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            { images }
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
