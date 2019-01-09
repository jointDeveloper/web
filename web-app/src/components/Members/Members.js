import React, { Component } from 'react';
import './Members.css';
import { members } from './members.json';

class Members extends Component {
  constructor() {
    super();
    this.state = {
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
      <div className="Members">
        <h1 className="font-title">Miembros</h1>
        { members }
      </div>
    );
  }
}

export default Members;