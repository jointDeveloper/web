import React from 'react';
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact bg-smoke" id="contact">
        <footer className="page-footer font-small teal pt-4">

          <div className="" id="up-container">

            <div className="container-fluid text-center text-md-left">

              <div className="row">

                <div className="col-md-6 mt-md-0 mt-3" id="left">

                  <div className="row">
                    <h5 className="text-uppercase font-weight-bold font-subtitle">CONTÁCTENOS</h5>
                  </div>

                  <div className="row">
                    <p>Laboratorio SIRIUS HPC</p>
                  </div>

                  <div className="row">
                    <p>Oficina 3-007</p>
                  </div>

                  <div className="row">
                    <p>Universidad Tecnológica de Pereira</p>
                  </div>

                  <div className="row">
                    <div className="col" id="utp-container">
                      <a href="https://www.utp.edu.co">
                        <img src={this.props.utp_img} alt="" className="responsive-img" id="utp" />
                      </a>
                    </div>

                    <div className="col">
                      <a href="https://sirius.utp.edu.co">
                        <img src={this.props.sirius_img} alt="" className="responsive-img" id="sirius" />
                      </a>
                    </div>
                  </div>

                </div>



                <hr className="clearfix w-100 d-md-none pb-3" />

                <div className="col-md-6 mb-md-0 mb-3" id="right">

                  <ContactForm />

                </div>

              </div>

            </div>
            </div>

            <div className="" id="down-container">
              <div className="footer-copyright text-center py-3">© Todos los derechos reservados</div>
            </div>

          </footer>
      </div>
    );
  }
}

export default Contact;
