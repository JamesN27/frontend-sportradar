// components/EventForm.js
'use client';
import React, { useState } from 'react';

function EventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [teams, setTeams] = useState('');
  const [sport, setSport] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ title, start, end, teams, sport });
    setTitle('');
    setStart('');
    setEnd('');
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
      <input
        type="text"
        placeholder="Sport"
        value={sport}
        onChange={(e) => setSport(e.target.value)}
      />
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
