// eventOverview.js
import React from 'react';
import EventList from '../../components/EventList';

function EventOverview() {
  return (
    <div>
      <h1>Event Overview</h1>
      <EventList /> {/* Render the EventList component */}
    </div>
  );
}

export default EventOverview;
