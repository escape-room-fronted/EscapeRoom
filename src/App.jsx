import "./App.css";
import Navbar from "./components/templates/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogicRoom from "./pages/LogicRoom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logic-room" element={<LogicRoom />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
