import "./App.css";
import Navbar from "./components/templates/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Logica from "./pages/Logica";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logica" element={<Logica />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
