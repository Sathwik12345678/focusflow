import { useState } from "react";
import { saveSession } from "../utils/storage";

export default function AddSession() {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSession = {
      id: Date.now(),
      subject,
      topic,
      hours: Number(hours)
    };

    saveSession(newSession);

    alert("Session Added!");

    setSubject("");
    setTopic("");
    setHours("");
  };

  return (
    <div className="main">
      <h2>Add Study Session</h2>
      <form onSubmit={handleSubmit} className="card">
        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <input
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
