import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Frontpage } from "./pages/Frontpage";
import { Layout } from "./layout/Layout";
import { Aboutpage } from "./pages/Aboutpage";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-YTQRSQPW5B");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Frontpage />} />
          <Route path="/about" element={<Aboutpage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
