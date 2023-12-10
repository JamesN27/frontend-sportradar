import Link from 'next/link';
import React from 'react';
import Calendar from '../components/Calendar';

function MyOverviewPage() {
  return (
    <div>
      <h1>Event Overview</h1>
      <Calendar />
      {/* Place content directly inside Link */}
      <Link href="/eventoverview">Go to Event Overview</Link>
    </div>
  );
}

export default MyOverviewPage;
