import React, { Component } from 'react';
import './Members.css';
import { members } from './members.json';

class Members extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    }
  }

  componentDidMount() {
    this.getUserPhotos();
  }

  componentWillUnmount() {
    this.setState({ members: [] });
  }

  getUserPhotos = () => {
    let storage = this.props.firebase.getStorage();

    for (let i = 0; i < members.length; i++) {
      let image = members[i].image_src === "" ? "images/members/user.png" : members[i].image_src;
      let pathReference = storage.ref(image);

      pathReference.getDownloadURL().then((url) => {
        members[i].image_url = url || "";
        this.setState({
          members: [...this.state.members, members[i]]
        });
      }).catch((error) => {
        console.error(error);
      });
    }
  }

  render() {
    let members = this.state.members.map((member, index) => {
      return (
        <div className="col member-container text-center" key={index + "member"}>
          <img className="member-pic rounded-circle img-responsive" alt="" src={ member.image_url } />
          <div className="member-info">
            <p className="font-weight-bold text-center text-dark font-quote-ananda">{member.name}</p>
            <div className="row d-flex justify-content-center">
              { member.linkedin !== "" ? (<a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-navy" id="linkedin">
                                          <i className="fab fa-linkedin" aria-hidden="true"></i>
                                        </a>) : null }
              { member.github !== "" ? (<a href={member.github} target="_blank" rel="noopener noreferrer" className="text-navy">
                                        <i className="fab fa-github-alt" aria-hidden="true"></i>
                                      </a>) : null }
            </div>
          </div>
        </div>
      );
    });

    let membersAux = [];
    let max, size = members.length;
    for (let i = 0; i < size; i += 4) {
      max = members.length < 4 ? members.length : 4;
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
      <div className="Members">
        <div className="row d-flex justify-content-center">
          <h1 className="font-title text-white">Miembros</h1>
        </div>
        { rowsOfMembers }
      </div>
    );
  }
}

export default Members;
