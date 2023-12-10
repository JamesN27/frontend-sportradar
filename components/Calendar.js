'use client';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
// components/Calendar.js
import React, { useEffect } from 'react';

function Calendar({ events }) {
  useEffect(() => {
    // Log events for debugging
    console.log('Events:', events);
  }, [events]);

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
