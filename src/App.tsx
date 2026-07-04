import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import Company from "./pages/Company";
import Support from "./pages/Support";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/company" element={<Company />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};

export default App;
