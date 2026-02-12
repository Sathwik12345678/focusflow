import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// In-memory data
let sessions = [];

// Test route
app.get("/", (req, res) => {
  res.send("FocusFlow API Running");
});

// Get sessions
app.get("/api/tasks", (req, res) => {
  res.json(sessions);
});

// Add session
app.post("/api/tasks", (req, res) => {
  const { subject, topic, hours } = req.body;

  const newSession = {
    id: Date.now(),
    subject,
    topic,
    hours: Number(hours)
  };

  sessions.push(newSession);
  res.json(newSession);
});

// Delete session
app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  sessions = sessions.filter(s => s.id !== id);
  res.json({ message: "Deleted" });
});

export default app;

// Run locally only
if (!process.env.VERCEL) {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}
