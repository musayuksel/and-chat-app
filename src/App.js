import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Nav from "./Component/Nav";
import AllAndis from "./Component/AllAndis";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/allandis" element={<AllAndis />} />
      </Routes>
    </>
  );
}

export default App;
