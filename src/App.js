import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/about" element={<h1>ALLL ANY</h1>} />
    </Routes>
  );
}

export default App;
