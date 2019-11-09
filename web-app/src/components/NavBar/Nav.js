import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const isTop = window.scrollY < 100;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop }, () => {
        let wrappedElement = document.getElementsByClassName('navbar')[0];
        let classNameElement = wrappedElement.className;
        let classNameArray = classNameElement.split(" ");

        if (!this.state.isTop) {
          if (!classNameArray.includes("scrolled")) classNameElement += " scrolled";
        } else {
          if (classNameArray.includes("scrolled")) {
            classNameArray.splice(-1, 1);
            classNameElement = classNameArray.join(" ");
          }
        }
        wrappedElement.className = classNameElement;
      });
    }


  };

  render() {
    return (
      <div className="Nav">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            <div className="row">
              <div className="col">
                <img src={this.props.image} alt="" className="responsive-img class_img" />
              </div>
            </div>
          </a>
          <div className="content text-white collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link font-weight-bold text-white font-subtitle" href="../#about">¿Quiénes somos?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white font-subtitle" href="../#chart">Estadísticas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white font-subtitle" href="../#discover">Descubre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white font-subtitle" href="#contact">¡Contáctanos!</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
