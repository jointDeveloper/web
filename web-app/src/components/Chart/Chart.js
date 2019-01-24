import React from 'react';
import { Pie } from 'react-chartjs-2';
import './Chart.css';

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

const womenVSman = {
  labels: [
		'Mujeres (%)',
		'Hombres (%)',
	],
	datasets: [{
		data: [55, 45],
		backgroundColor: [
		'#cb65c4',
    '#49b9ff'
		],
		hoverBackgroundColor: [
		'#cb65c4',
    '#49b9ff'
		]
	}]
};

export default class Chart extends React.Component {
  render() {
    return (
      <div className="Chart bg-pink-yarrow-light" id="chart">
        <div className="row d-flex justify-content-center">
          <h2 className="font-subtitle font-weight-bold">Estadísticas</h2>
        </div>
        <div className="row">
          <div className="col">
            <Pie data={data} />
          </div>
          <div className="col">
            <Pie data={womenVSman} />
          </div>
        </div>
      </div>
    );
  }
};
