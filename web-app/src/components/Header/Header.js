import React from 'react';
import './Header.css';
// import Nav from '../NavBar/Nav';

class Header extends React.Component {
  render() {
    return (
      <div className="Header container-fluid d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col">
            <p className="font-paragraph text-center text-smoke-white" id="mision">Somos una comunidad que busca despertar el interés de las mujeres y niñas en la tecnología, generando espacios que promueven su participación en este campo mediante el aprendizaje colectivo, compartiendo conocimientos y recursos técnicos con otras comunidades.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
