import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SocialBar from './components/SocialBar/SocialBar';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Members from './components/Members/Members';
import photoGallery from './components/photoGallery/photoGallery';
import Events from './components/Events/Events';
import Blog from './components/Blog/Blog';
import { withFirebase } from './components/Firebase';

class App extends Component {
  render() {
    return (
      <Router basename="web">
        <div className="App">
          <SocialBar />
          <Header image="./images/jointDev.png" />

          <Route exact path="/" component={ Home } />
          <Route path="/members" component={ withFirebase(Members) } />
          <Route path="/photoGallery" component={ withFirebase(photoGallery) } />
          <Route path="/events" component={ Events } />
          <Route path="/blog" component={ Blog } />

          <Contact utp_img="./images/logo_utp.png" sirius_img="./images/logo_sirius.png" />
        </div>
      </Router>
    );
  }
}

export default App;
