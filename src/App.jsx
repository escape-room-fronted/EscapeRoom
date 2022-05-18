// import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogicRoom from "./pages/LogicRoom";
import LogicDescription from "./pages/LogicDescription";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Footer from "./components/organisms/Footer";
import Navbar from "./components/templates/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/logica" element={<LogicDescription />}></Route>

        {/* Private Routes */}
        <Route path="/logic-room" element={<LogicRoom />}></Route>

        {/* All */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
