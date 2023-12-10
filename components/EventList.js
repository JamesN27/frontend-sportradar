// EventList.js
'use client';
// EventList.js
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
            <p>Date: {event.dateVenue}</p>
            <p>Time: {event.timeVenueUTC}</p>
            <p>Sport: {event.originCompetitionName}</p>
            <p>Home Team: {event.homeTeam?.name}</p>
            <p>Away Team: {event.awayTeam?.name}</p>
            <p>Status: {event.status}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
