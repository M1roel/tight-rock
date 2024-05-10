import React from 'react';
import '../Header.css';

function Header() {
  return (
    <div className="App-header">
      <div className="Image-container">
        <img src="/images/2fc80658-d8c1-41be-9071-8001f3f76a44.png" alt="Logo" className="Bandfoto" />
        <div className="Schriftzug">
          <h1 className="Tight">Tight</h1>
          <h2 className="FemaleFronted">Female Fronted Heavy-Rock</h2>
        </div>
      </div>
      <div className="Header-bottom-bar"></div>
    </div>
  );
}

export default Header;
