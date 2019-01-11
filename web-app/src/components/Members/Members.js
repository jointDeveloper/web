import React, { Component } from 'react';
import './Members.css';
import { members } from './members.json';

class Members extends Component {
  constructor() {
    super();
    this.state = {
      members,
      userPicture: "images/members/user.png"
    }
  }

  render() {
    let members = this.state.members.map((member, index) => {
      return (
        <div className="col" key={index + "member"}>
          <img className="member-pic rounded-circle img-responsive" src={ member.picture != "" ? member.picture : this.state.userPicture } />
          <p className="member-name text-white font-weight-bold text-center">{member.name}</p>
          <p className="member-info text-white text-center">{member.info}</p>
          <div className="row d-flex justify-content-center">
            { member.linkedin != "" ? (<a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white" id="linkedin">
                                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                                       </a>) : null }
            { member.github != "" ? (<a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white">
                                       <i className="fab fa-github-alt" aria-hidden="true"></i>
                                     </a>) : null }
          </div>
        </div>
      );
    });

    let membersAux = [];
    let max, size = members.length;
    for (let i = 0; i < size; i += 3) {
      max = members.length < 3 ? members.length : 3;
      membersAux.push(members.splice(0, max));
    }

    const rowsOfMembers = membersAux.map((memberRow, index) => {
      return (
        <div className="row member-row" key={index + "memberRow"}>
          { memberRow }
        </div>
      );
    });

    return (
      <div className="Members bg-navy-light">
        <div className="row d-flex justify-content-center">
          <h1 className="font-title text-white">Miembros</h1>
        </div>
        { rowsOfMembers }
      </div>
    );
  }
}

export default Members;
