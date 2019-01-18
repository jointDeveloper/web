import request from 'superagent';
import moment from 'moment';

const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;
const CALENDAR_API_KEY = process.env.REACT_APP_CALENDAR_API_KEY;
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${CALENDAR_API_KEY}`;

export const getEvents = (callback) => {
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
    })
}
