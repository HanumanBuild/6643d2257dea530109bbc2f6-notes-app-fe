import React from 'react';

function Dashboard() {
  return (
    <div className="container mx-auto px-4">
      <h1>Dashboard</h1>
      {/* Additional dashboard UI elements will be implemented here */}
      axios.get(`${process.env.REACT_APP_NOTES_APP_BE_URL}/api/notes`)
    </div>
  );
}

export default Dashboard;