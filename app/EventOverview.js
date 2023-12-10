import React from 'react';
import EventList from '../components/EventList';

function MyOverviewPage() {
  return (
    <div>
      <h1>Event Overview</h1>
      <EventList />; {/* Render the Calendar component */}
    </div>
  );
}

export default MyOverviewPage;
