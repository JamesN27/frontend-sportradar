import React from 'react';
import Calendar from '../components/Calendar'; // Import the Calendar component
import EventList from '../components/EventList';

function MyOverviewPage() {
  return (
    <div>
      <h1>Event Overview</h1>
      <Calendar /> {/* Render the Calendar component */}
    </div>
  );
}

export default MyOverviewPage;
