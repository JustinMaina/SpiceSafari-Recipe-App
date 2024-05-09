import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <section>
        <NavBar />
      </section>

      <section className="image-section">
        <div className="overlay">
          
          <Link to="/search">
          <input className="d-flex" type="text" placeholder="Search..."  />
          </Link>

        </div>
      </section>

      <section className="section1">
        <LandingPage />
      </section>
    </>
  );
}

export default App;

