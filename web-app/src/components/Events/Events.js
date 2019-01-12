import React from 'react';
import './Events.css';
import { events } from './events.json';

class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      events
    }
  }

  render() {
    let events = this.state.events.map((event, index) => {
      return (
        <p>{event.title}</p>
      );
    });

    return (
      <div className="Events">
        <h1>Events</h1>
        {events}
      </div>
    );
  }
}

export default Events;
