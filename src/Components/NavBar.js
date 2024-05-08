import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
  
    <nav className="navbar fixed-top bg-body-tertiary">
      <div className="logo">

        <h1>SPICESAFARI RECIPE</h1>
        
        </div>
      <div className="search">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </nav>
  );
};

export default Navbar;