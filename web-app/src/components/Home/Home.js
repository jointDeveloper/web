import React, { Component } from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Discover from '../Discover/Discover';
import Stats from '../Stats/Stats';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header /> 
        <About />
        <Stats />
        <Discover />
      </div>
    );
  }
}

export default Home;
