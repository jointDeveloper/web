import React from 'react';
import './Stats.css';
const imagesPath = 'images/stats/';

class Stats extends React.Component {
  render() {
    return (
      <div className="Stats" id="chart">
        <div className="row d-flex justify-content-center">
          <h2 className="font-subtitle font-weight-bold">Estadísticas</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <h3 className="font-paragraph font-weight-bold text-smoke-strong">2016-2018</h3>
        </div>
        <div className="row">
          <div className="col">
            <div className="row d-flex justify-content-center">
              <img className="img-responsive img_gender" alt="" src={ imagesPath + "imgMujeres.png" } />
            </div>
            <div className="row d-flex justify-content-center">
              <img className="img-responsive img_gender" alt="" src={ imagesPath + "imgHombres.png" } />
            </div>
          </div>
          <div className="col align-self-center">
            <div className="row d-flex justify-content-center">
							<img className="img-responsive img_participation" alt="" src={ imagesPath + "imgParticipacion.png" } />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Stats;
