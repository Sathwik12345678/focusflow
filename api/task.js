let sessions = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(sessions);
  }

  if (req.method === "POST") {
    const { subject, topic, hours } = req.body;

    const newSession = {
      id: Date.now(),
      subject,
      topic,
      hours: Number(hours)
    };

    sessions.push(newSession);
    return res.status(200).json(newSession);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    sessions = sessions.filter(s => s.id != id);
    return res.status(200).json({ message: "Deleted" });
  }

  res.status(405).json({ message: "Method not allowed" });
}
