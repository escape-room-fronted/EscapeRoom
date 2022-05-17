// import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogicRoom from "./pages/LogicRoom";
import LogicDescription from "./pages/LogicDescription";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Footer from "./components/organisms/Footer";
import TableUsers from "./pages/TableUsers";
import Navbar from "./components/templates/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/logic-room" element={<LogicRoom />}></Route>
        <Route path="/logica" element={<LogicDescription />}></Route>
        <Route path="/tableusers" element={<TableUsers />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
