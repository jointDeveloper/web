import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Members from './components/Members/Members';
import photoGallery from './components/photoGallery/photoGallery';
import Events from './components/Events/Events';
import Blog from './components/Blog/Blog';
import { withFirebase } from './components/Firebase';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header image="./images/jointDev.png" />

          <Route exact path="/" component={ Home } />
          <Route path="/members" component={ withFirebase(Members) } />
          <Route path="/photoGallery" component={ withFirebase(photoGallery) } />
          <Route path="/events" component={ Events } />
          <Route path="/blog" component={ Blog } />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
