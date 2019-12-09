import React from 'react';
import './Events.css';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import request from 'superagent';

const localizer = BigCalendar.momentLocalizer(moment);
const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;
const CALENDAR_API_KEY = process.env.REACT_APP_CALENDAR_API_KEY;
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${CALENDAR_API_KEY}`;

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount = () => {
    this.getEvents((events) => {
      this.setState({ events });
    });
  }

  componentWillUnmount() {
    this.setState({ events: [] });
  }

  getEvents = (callback) => {
    request
      .get(url)
      .end((err, resp) => {
        if (!err) {
          let events = [];
          let items = JSON.parse(resp.text).items;
          for (let i = 0; i < items.length; i++) {
            let event = items[i];
            events.push({
              start: (event.start ? (event.start.date || event.start.dateTime) : moment().toDate()),
              end: (event.end ? (event.end.date || event.end.dateTime) : moment().add(4, "hours").toDate()),
              allDay: true,
              title: event.summary,
            });
          }
          callback(events);
        } else {
          console.error("An error has ocurred in gcal: ", err);
        }
      });
  }

  render() {
    return (
      <div className="Events">
        <div className="row d-flex justify-content-center">
          <h1 className="font-title font-weight-bold text-navy">Eventos</h1>
        </div>
        <div className="row d-flex justify-content-center calendar-container">
          <BigCalendar
            style={{height: '420px', color: '#3451b3'}}
            events={this.state.events}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
        <div className="row d-flex justify-content-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.86245136124!2d-75.69129118503946!3d4.793648496518814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38870d5dcf9253%3A0x8a5ee3bac75e2b3c!2sUniversidad%20Tecnol%C3%B3gica%20de%20Pereira!5e0!3m2!1ses-419!2sbr!4v1573941017444!5m2!1ses-419!2sbr"></iframe>
        </div>
      </div>
    );
  }
}

export default Events;
