import React from 'react';
import './About.css';

class Header extends React.Component {
  render() {
    const whatWeDo = [
      {
        "title":"Enseñamos a niños y niñas",
        "text":"A través de juegos y de formas didácticas sobre programación y electrónica.",
        "icon":"fas fa-chalkboard-teacher"
      },
      {
        "title":"Compartimos conocimiento",
        "text":"Realizamos charlas mensuales y talleres sobre tecnología, con nuestro conocimiento y con el de personas de comunidades amigas",
        "icon":"fas fa-share-alt"
      },
      {
        "title":"Compartimos oportunidades",
        "text":"De becas, trabajos, pasantías y de más a través de nuestras redes sociales.",
        "icon":"fas fa-hands-helping"
      },
    ];

    const items = whatWeDo.map((item, index) => {
      return (
        <div className="col" key={index + "whatWeDo"}>
          <div className="row">
            <h3 className="text-smoke-white">{item.title}</h3>
          </div>
          <div className="row">
            <i className={"text-smoke-white " + item.icon}></i>
          </div>
          <div className="row">
            <p className="text-smoke-white text-center">{item.text}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="About container-fluid bg-pink-yarrow" id="about">

        <div className="row">
          <div className="col">
            <p className="font-quote text-center text-smoke-white" id="mision">Somos una comunidad que busca despertar el interés de las mujeres y niñas en la tecnología, generando espacios que promueven su participación en este campo mediante el aprendizaje colectivo, compartiendo conocimientos y recursos técnicos con otras comunidades.</p>
          </div>
        </div>

        <h1 className="font-subtitle text-center text-smoke-white">¿Qué hacemos?</h1>

        <div className="row" id="whatWeDo">
          {items}
        </div>

      </div>
    );
  }
}

export default Header;
