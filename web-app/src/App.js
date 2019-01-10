import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SocialBar from './components/SocialBar/SocialBar';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SocialBar />
          <Header image="./images/jointDev.png" />

          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          {/* <Route path="/topics" component={Topics} />*/ }

          <Contact utp_img="./images/logo_utp.png" sirius_img="./images/logo_sirius.png" />
        </div>
      </Router>
    );
  }
}

export default App;
