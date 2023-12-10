// pages/MyOverviewPage.js
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import EventForm from '../components/EventForm';

function MyOverviewPage() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <h1>Event Overview</h1>
      <Link href="/eventoverview">Go to Event Overview</Link>
      <EventForm addEvent={addEvent} />
      <Calendar events={events} />
    </div>
  );
}

export default MyOverviewPage;
