import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SocialBar from './components/SocialBar/SocialBar';
import About from './components/About/About';
import Discover from './components/Discover/Discover';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SocialBar />
        <Header image="./images/jointDev.png" />
        <About />
        <Discover />
        <Contact utp_img="./images/logo_utp.png" sirius_img="./images/logo_sirius.png" />
      </div>
    );
  }
}

export default App;
