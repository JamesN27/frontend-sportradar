// components/EventForm.js
'use client';

// components/EventForm.js
'use client';

import React, { useState } from 'react';

function EventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [teams, setTeams] = useState('');
  const [sport, setSport] = useState('');

  const sportsOptions = [
    'Football',
    'Basketball',
    'Baseball',
    'Volleyball',
    'American Football',
    'Icehockey',
    'Handball',
    'Tennis',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = start.substring(0, 10); // Extracting date from datetime-local format
    const time = start.substring(11, 16); // Extracting time from datetime-local format

    const newEvent = {
      dateVenue: date,
      timeVenueUTC: time,
      homeTeam: { name: title },
      awayTeam: { name: teams },
      sport,
    };

    addEvent(newEvent);
    setTitle('');
    setStart('');
    setTeams('');
    setSport('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Home Team"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Away Team"
        value={teams}
        onChange={(e) => setTeams(e.target.value)}
      />

      <select value={sport} onChange={(e) => setSport(e.target.value)}>
        <option value="" disabled>
          Select Sport
        </option>
        {sportsOptions.map((sportOption, index) => (
          <option key={index} value={sportOption}>
            {sportOption}
          </option>
        ))}
      </select>

      <input
        type="datetime-local"
        placeholder="Start Date"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;
