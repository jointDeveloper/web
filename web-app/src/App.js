import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SocialBar from './components/SocialBar/SocialBar';
import About from './components/About/About';
import Discover from './components/Discover/Discover';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SocialBar />
        <Header image="./images/jointDev.png" />
        <About />
        <Discover />
      </div>
    );
  }
}

export default App;
