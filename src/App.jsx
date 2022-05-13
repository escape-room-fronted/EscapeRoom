import "./App.css";
import Navbar from "./components/templates/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logica from "./pages/Logica";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/logica" element={<Logica />}></Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
