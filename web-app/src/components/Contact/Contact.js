import React from 'react';
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact bg-smoke" id="up-container">

        <div className="container-fluid text-md-left">

          <div className="row">

            <div className="col-xl-6 col-sm-12" id="left">

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

              <div className="row logos">
                <div className="col">
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

            <div className="col" id="right">
              <ContactForm />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Contact;
