import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogicRoom from "./pages/LogicRoom";
import LogicDescription from "./pages/LogicDescription";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Footer from "./components/organisms/Footer";
import Navbar from "./components/templates/Navbar";
import Layout from "./components/templates/Layout";
import RequireAuth from "./context/auth/RequireAuth";
import Unauthorized from "./pages/Unauthorized";
import useAuth from "./hooks/useAuth";
import ViewAdmin from "./pages/ViewAdmin";
import CreateRoom from "./pages/CreateRoom";
import Loader from "./components/templates/loader/Loader";

function App() {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("user") && Object.keys(auth).length === 0) {
      let data = JSON.parse(localStorage.getItem("user"));
      setAuth(data);
    }
  }, []);
  console.log("data: =>> ", typeof auth);

  const roles = {
    user: "6283d02f50ac8e92a7bd50e5",
    admin: "6283d02f50ac8e92a7bd50e6",
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logica" element={<LogicDescription />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Private Routes */}
        {/* User */}
        <Route element={<RequireAuth allowedRoles={"user"} />}>
          <Route path="/logic-room" element={<LogicRoom />}></Route>
        </Route>
        {/* Admin */}
        <Route element={<RequireAuth allowedRoles={"admin"} />}>
          <Route path="/create-room" element={<CreateRoom />}></Route>
          <Route path="/view-admin" element={<ViewAdmin />}></Route>
        </Route>

        {/* All */}
        <Route path="/loader" element={<Loader />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
