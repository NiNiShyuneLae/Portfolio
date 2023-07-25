import React from "react";
import Nav from "../components/Nav";
import Aboutme from "../components/Aboutme";
import "../components/Aboutme.css";
import "../components/Nav.css";
import Banner from "../components/Banner";
import Intro from "../components/Intro";

const Home = ({data}) => {
  return (
    <section className="data-section" id="home">
      <div className="bg-orange-50">
        <Nav data={data}/>
        <Intro/>
      </div>
      <Aboutme/>
    </section>
  );
};

export default Home;
