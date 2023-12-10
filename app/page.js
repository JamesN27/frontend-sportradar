// pages/MyOverviewPage.js
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList'; // Assuming this is where EventList is located

function MyOverviewPage() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const updateEventList = (newEvent) => {
    // Implement your update logic here
    // Make sure to update localStorage and setEvents accordingly
    const storedEvents = JSON.parse(localStorage.getItem('myEvents')) || [];
    const updatedEvents = [...storedEvents, newEvent];
    localStorage.setItem('myEvents', JSON.stringify(updatedEvents));
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <h1>Event Overview</h1>
      <Link href="/eventoverview">Go to Event Overview</Link>
      <EventForm addEvent={addEvent} updateEventList={updateEventList} />
      <Calendar events={events} />
      <EventList />
    </div>
  );
}

export default MyOverviewPage;
