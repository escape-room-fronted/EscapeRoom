import React from "react";
import Banner from "../components/templates/Banner";
import Rooms from "../components/templates/Rooms";
import About from "../components/templates/landing/About";
import Contact from "../components/templates/landing/Contact";
import Educamás from "../components/templates/landing/Educamás";
import Footer from "../components/templates/landing/Footer";

const Home = () => {
  return (
    <div className="text-black">
      <Banner />
      <Rooms />
      <About />
      <Contact/>
      <Educamás/>
      <Footer />
    </div>
  );
};

export default Home;
