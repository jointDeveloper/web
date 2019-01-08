import React, { Component } from 'react';
import './App.css';
import { members } from './members.json';
import Header from './components/Header/Header';
import SocialBar from './components/SocialBar/SocialBar';
import About from './components/About/About';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "jointDeveloper Web",
      members
    }
  }

  render() {
    const members = this.state.members.map((member, index) => {
      let id = "member" + index.toString();
      return (
        <div>
          <p key={id + "name"} className="font-subtitle">{member.name}</p>
          <p key={id + "pic"} className="">{member.picture}</p>
          <p key={id + "quote"} className="font-quote">"This is a quote"</p>
          <p key={id + "highlighted"} className="font-highlighted-paragraph">{"This is another paragraph"}</p>
        </div>
      );
    });
    return (
      <div className="App">
        <SocialBar />
        <Header image="./images/jointDev.png" />
        <About />
        <h1 className="font-title">Miembros</h1>
        { members }
      </div>
    );
  }
}

export default App;
