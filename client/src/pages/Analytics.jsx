import { useEffect, useState } from "react";
import { getSessions } from "../utils/storage";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Analytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sessions = getSessions();

    const grouped = {};
    sessions.forEach((s) => {
      grouped[s.subject] = (grouped[s.subject] || 0) + s.hours;
    });

    const chartData = Object.keys(grouped).map((key) => ({
      subject: key,
      hours: grouped[key]
    }));

    setData(chartData);
  }, []);

  return (
    <div className="main">
      <h2>Study Analytics</h2>

      {data.length === 0 ? (
        <p className="empty">No data to show</p>
      ) : (
        <div className="card" style={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="hours"
                stroke="#38bdf8"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
