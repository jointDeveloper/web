import React from 'react';
import './About.css';

class Header extends React.Component {
  render() {
    const whatWeDo = [
      {
        "title":"Enseñamos a niños y niñas",
        "text":"A través de juegos y de formas didácticas sobre programación y electrónica.",
        "icon":"fas fa-chalkboard-teacher",
        "icon_img": "education.png"
      },
      {
        "title":"Compartimos conocimiento",
        "text":"Realizamos charlas mensuales y talleres sobre tecnología, con nuestro conocimiento y con el de personas de comunidades amigas",
        "icon":"fas fa-share-alt",
        "icon_img": "network.png"
      },
      {
        "title":"Compartimos oportunidades",
        "text":"De becas, trabajos, pasantías y de más a través de nuestras redes sociales.",
        "icon":"fas fa-hands-helping",
        "icon_img": "help.png"
      },
    ];

    const items = whatWeDo.map((item, index) => {
      return (
        <div className="col d-flex justify-content-center what-we-do" key={index + "whatWeDo"}>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <h3 className="text-smoke-strong text-center">{item.title}</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <i className={"text-olympia-strong " + item.icon}></i>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <p className="text-smoke-strong text-center">{item.text}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="About container-fluid" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 className="font-subtitle text-center text-navy font-weight-bold">¿Qué hacemos?</h1>
            </div>
          </div>
        </div>
        <div className="row" id="what-we-do-row-container">
          {items}
        </div>

      </div>
    );
  }
}

export default Header;
