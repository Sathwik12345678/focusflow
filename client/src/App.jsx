import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Land";
import Dashboard from "./pages/Dashboard";
import AddSession from "./pages/AddSession";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddSession />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
