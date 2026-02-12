import { useEffect, useState } from "react";
import { getSessions } from "../utils/storage";

export default function Dashboard() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions(getSessions());
  }, []);

  const totalHours = sessions.reduce((sum, s) => sum + s.hours, 0);

  return (
    <div className="main">
      <h2>Dashboard</h2>

      <div className="stat-grid">
        <div className="stat-card">
          <h3>Total Hours</h3>
          <h1>{totalHours}</h1>
        </div>

        <div className="stat-card">
          <h3>Sessions</h3>
          <h1>{sessions.length}</h1>
        </div>
      </div>

      {sessions.length === 0 ? (
        <p className="empty">No sessions yet</p>
      ) : (
        sessions.map((s) => (
          <div key={s.id} className="card">
            <b>{s.subject}</b> – {s.topic} ({s.hours} hrs)
          </div>
        ))
      )}
    </div>
  );
}
