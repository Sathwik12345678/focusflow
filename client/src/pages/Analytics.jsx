import { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const API = import.meta.env.VITE_API_URL;

export default function Analytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API + "/tasks")
      .then(res => res.json())
      .then(setData);
  }, []);

  // Group by subject
  const subjectData = {};
  data.forEach(t => {
    subjectData[t.subject] =
      (subjectData[t.subject] || 0) + Number(t.hours || 0);
  });

  const chartData = {
    labels: Object.keys(subjectData),
    datasets: [
      {
        label: "Study Hours",
        data: Object.values(subjectData),
        borderColor: "#06b6d4",
        backgroundColor: "rgba(6,182,212,0.2)",
        tension: 0.4,
        fill: true
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white"
        }
      }
    },
    scales: {
      x: {
        ticks: { color: "white" }
      },
      y: {
        ticks: { color: "white" }
      }
    }
  };

  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="card">
          <h2>Study Trends</h2>
          <Line data={chartData} options={options} />
        </div>
      </div>
    </>
  );
}
