import React from 'react';
import './Events.css';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getEvents } from '../../gcal';
const localizer = BigCalendar.momentLocalizer(moment);
const gforms_src = "https://docs.google.com/forms/d/e/1FAIpQLSezECt65ud1txqDM4nWVVr6KaMbglg7eTvE5hB5tUFsDQ6--A/viewform?embedded=true";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount = () => {
    getEvents((events) => {
      this.setState({events});
    });
  }

  render() {
    return (
      <div className="Events bg-pink-yarrow">
        <div className="row d-flex justify-content-center">
          <h1 className="font-title text-white">Eventos</h1>
        </div>
        <div className="row d-flex justify-content-center calendar-container">
          <BigCalendar
            style={{height: '420px', color: 'white'}}
            events={this.state.events}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
        <div className="row d-flex justify-content-center">
          <iframe title="google-form" src={gforms_src} width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Cargando...</iframe>
        </div>
      </div>
    );
  }
}

export default Events;
