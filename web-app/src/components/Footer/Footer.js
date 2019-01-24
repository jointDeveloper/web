import React from 'react';
import './Footer.css';
import Contact from '../Contact/Contact';
import SocialBar from '../SocialBar/SocialBar';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer bg-pink-yarrow-strong" id="contact">
        <footer className="page-footer font-small teal">
          <Contact utp_img="./images/logo_utp.png" sirius_img="./images/logo_sirius.png" />
          <SocialBar />
          <div className="" id="down-container">
            <div className="footer-copyright text-center py-3 text-smoke-white">© jointDev 2019. Todos los derechos reservados</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
