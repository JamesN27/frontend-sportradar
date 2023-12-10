import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
// components/Calendar.js
import React from 'react';

function Calendar({ events }) {
  return (
    <div>
      <h1>Event Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events}
      />
    </div>
  );
}

export default Calendar;
