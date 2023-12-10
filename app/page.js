// pages/MyOverviewPage.js
'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Calendar from '../components/Calendar';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

function MyOverviewPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const addEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    // Also add logic here to update the calendar directly (assuming 'Calendar' handles 'events' prop)
    // calendarRef.current.addEvent(newEvent);
  };

  return (
    <div>
      <h1>Event Overview</h1>
      <Link href="/eventoverview">Go to Event Overview</Link>
      <EventForm addEvent={addEvent} />
      <Calendar events={events} />{' '}
      {/* Ensure 'Calendar' correctly handles the 'events' prop */}
      <EventList events={events} />
    </div>
  );
}

export default MyOverviewPage;
