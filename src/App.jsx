import "./App.css";
import Navbar from "./components/templates/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
