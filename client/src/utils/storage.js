const KEY = "focusflow_sessions";

export const getSessions = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveSession = (session) => {
  const sessions = getSessions();
  sessions.push(session);
  localStorage.setItem(KEY, JSON.stringify(sessions));
};

export const deleteSession = (id) => {
  const sessions = getSessions().filter(s => s.id !== id);
  localStorage.setItem(KEY, JSON.stringify(sessions));
};
