'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import eventData from '../sportData.json';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventData.data);
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <Link href={`/event/${index}`}>
              <p>Date: {event.dateVenue}</p>
            </Link>
            <Link href={`/event/${index}`}>
              <p>Time: {event.timeVenueUTC}</p>
            </Link>
            <Link href={`/event/${index}`}>
              <p>Home Team: {event.homeTeam?.name}</p>
            </Link>
            <Link href={`/event/${index}`}>
              <p>Away Team: {event.awayTeam?.name}</p>
            </Link>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
