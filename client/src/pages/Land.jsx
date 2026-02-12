import { Link } from "react-router-dom";
import { FaChartLine, FaClock, FaBrain } from "react-icons/fa";

export default function Landing() {
  return (
    <div className="landing">
      <div className="hero-content">
        <h1 className="logo">FocusFlow</h1>
        <p className="tagline">
          Track your study. Build discipline. Achieve your goals.
        </p>

        <Link to="/dashboard">
          <button className="primary-btn">Start Tracking</button>
        </Link>

        {/* Features */}
        <div className="features">
          <div className="feature-card">
            <FaClock size={30} />
            <p>Track Study Time</p>
          </div>

          <div className="feature-card">
            <FaChartLine size={30} />
            <p>Analytics & Insights</p>
          </div>

          <div className="feature-card">
            <FaBrain size={30} />
            <p>Improve Focus</p>
          </div>
        </div>
      </div>
    </div>
  );
}
