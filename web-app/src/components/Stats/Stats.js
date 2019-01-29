import React from 'react';
import './Stats.css';
import { Pie } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
defaults.global.defaultFontFamily = 'fontParagraph';
defaults.global.defaultFontColor = '#5a5a5a';
defaults.global.defaultFontSize = 15;
const imagesPath = 'images/stats/';

const data = {
	labels: [
		'Mujeres mayores de 15 años',
		'Mujeres menores de 15 años',
		'Hombres menores de 15 años',
    'Hombres mayores de 15 años'
	],
	datasets: [{
		data: [500, 427, 368, 582],
		backgroundColor: [
    '#ff9f00',
		'#032567',
		'#cb65c4',
    '#49b9ff'
		],
		hoverBackgroundColor: [
    '#ff9f00',
		'#032567',
		'#cb65c4',
    '#49b9ff'
		]
	}]
};

class Stats extends React.Component {
  render() {
    return (
      <div className="Stats bg-pink-yarrow-light" id="chart">
        <div className="row d-flex justify-content-center">
          <h2 className="font-subtitle font-weight-bold">Estadísticas</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <h3 className="font-paragraph font-weight-bold text-smoke-strong">2016-2018</h3>
        </div>
        <div className="row">
          <div className="col">
            <div className="row d-flex justify-content-center">
              <img className="img-responsive" alt="" src={ imagesPath + "imgMujeres.png" } />
            </div>
            <div className="row d-flex justify-content-center">
              <img className="img-responsive" alt="" src={ imagesPath + "imgHombres.png" } />
            </div>
          </div>
          <div className="col align-self-center">
            <div className="row d-flex justify-content-center">
              <Pie data={data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Stats;
