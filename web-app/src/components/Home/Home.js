import React, { Component } from 'react';
import About from '../About/About';
import Discover from '../Discover/Discover';
import Chart from '../Chart/Chart';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <About />
        <Chart />
        <Discover />
      </div>
    );
  }
}

export default Home;
