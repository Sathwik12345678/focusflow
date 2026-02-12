import { useState } from "react";
import Sidebar from "../Components/Sidebar";

const API = import.meta.env.VITE_API_URL;

export default function AddSession() {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [hours, setHours] = useState("");
  const [toast, setToast] = useState(false);

  const save = () => {
    fetch(API + "/tasks", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ subject, topic, hours })
    });

    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="card">
          <h2>Add Study Session</h2>
          <input placeholder="Subject" onChange={e=>setSubject(e.target.value)} />
          <input placeholder="Topic" onChange={e=>setTopic(e.target.value)} />
          <input type="number" placeholder="Hours" onChange={e=>setHours(e.target.value)} />
          <button onClick={save}>Save</button>
        </div>
      </div>

      {toast && <div className="toast">Session Added ✓</div>}
    </>
  );
}
