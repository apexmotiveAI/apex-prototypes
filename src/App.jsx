import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Client from "./pages/Client";
import Viewer from "./pages/Viewer";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:clientSlug" element={<Client />} />
      <Route path="/:clientSlug/:protoSlug" element={<Viewer />} />
    </Routes>
  );
}
