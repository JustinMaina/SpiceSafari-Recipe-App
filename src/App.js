import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <section>
        <NavBar />
      </section>

      <section className="image-section">
        <div className="overlay">
          <form>
          <input className="d-flex" type="text" placeholder="Search..." />
          </form>
        </div>
      </section>

      <section className="section1">
        <LandingPage />
      </section>
    </>
  );
}

export default App;

