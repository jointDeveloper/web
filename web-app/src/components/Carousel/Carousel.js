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
      this.setState({ carouselImages: nextProps.images });
    }
  }

  render() {
    return (
      <div className="Carousel col d-flex justify-content-center">
        <div id={ this.props.carouselId } className="carousel slide" data-ride="carousel">
          <div className="carousel-inner row">
            { this.state.carouselImages }
          </div>
          <a className="carousel-control-prev bg-pink-yarrow-light" href={ "#" + this.props.carouselId } onClick={(e) => this.props.isMultipleCarousel ? this.props.showPrevElement() : null }>
            <span className="carousel-control-prev-icon" role="button" data-slide="prev" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next bg-pink-yarrow-light" href={ "#" + this.props.carouselId } role="button" data-slide="next" onClick={(e) => this.props.isMultipleCarousel ? this.props.showNextElement() : null} >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
