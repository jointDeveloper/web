import React, { Component } from 'react';
import About from '../About/About';
import Discover from '../Discover/Discover';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <About />
        <Discover />
      </div>
    );
  }
}

export default Home;
