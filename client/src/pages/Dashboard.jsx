import { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";

const API = import.meta.env.VITE_API_URL;

export default function Dashboard() {
  const [data, setData] = useState([]);

  const load = () => {
    fetch(API + "/tasks")
      .then(res => res.json())
      .then(setData);
  };

  useEffect(load, []);

  const totalHours = data.reduce((sum, t) => sum + Number(t.hours || 0), 0);
  const goal = 20;
  const progress = Math.min((totalHours / goal) * 100, 100);

  return (
    <>
      <Sidebar />
      <div className="main">
        <h2>Dashboard</h2>

        <div className="stat-grid">
          <div className="stat-card">
            <h3>Total Hours</h3>
            <h1>{totalHours}</h1>
          </div>

          <div className="stat-card">
            <h3>Sessions</h3>
            <h1>{data.length}</h1>
          </div>

          <div className="stat-card">
            <h3>Weekly Goal</h3>
            <div
              className="progress-circle"
              style={{ "--progress": progress + "%" }}
            >
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        {data.length === 0 ? (
          <div className="empty">
            <h3>No sessions yet</h3>
          </div>
        ) : (
          data.map(t => (
            <div className="card" key={t.id}>
              <h3>{t.subject}</h3>
              <p>{t.topic}</p>
              <p>{t.hours} hrs</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
