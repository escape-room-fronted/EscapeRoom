import "./App.css";
import Navbar from "./components/templates/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogicRoom from "./pages/LogicRoom";
import LogicDescription from "./pages/LogicDescription";
import CodeDescription from "./pages/CodeDescription";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/logic-room" element={<LogicRoom />}></Route>
        <Route path="/logica" element={<LogicDescription />}></Route>
        <Route path="/codigo" element={<CodeDescription />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
