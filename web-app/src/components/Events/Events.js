import React from 'react';
import './Events.css';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import request from 'superagent';

const localizer = BigCalendar.momentLocalizer(moment);
const gforms_src = "https://docs.google.com/forms/d/e/1FAIpQLSezECt65ud1txqDM4nWVVr6KaMbglg7eTvE5hB5tUFsDQ6--A/viewform?embedded=true";

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
              start: event.start.date || event.start.dateTime || moment().toDate(),
              end: event.end.date || event.end.dateTime || moment().add(4, "hours").toDate(),
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
