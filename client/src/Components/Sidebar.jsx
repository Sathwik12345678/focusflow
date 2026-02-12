import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>FocusFlow</h2>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/add">Add Subject</Link>
      <Link to="/analytics">Analytics</Link>
    </div>
  );
}
