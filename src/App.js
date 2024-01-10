import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./pages/homepage/Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
