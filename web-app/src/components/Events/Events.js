import React from 'react';
import './Events.css';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getEvents } from '../../gcal';
const localizer = BigCalendar.momentLocalizer(moment);

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
        <div className="row d-flex justify-content-center">
          <BigCalendar
            style={{height: '420px', color: 'white'}}
            events={this.state.events}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </div>
    );
  }
}

export default Events;
