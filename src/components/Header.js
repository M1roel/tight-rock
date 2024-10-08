import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className="App-header">
      <div className="Image-container">
        <img src="/images/headerimg.jpg" alt="Logo" className="Bandfoto" />
        <div className="Text-overlay">
          <h1 className="Tight">Tight</h1>
          <h2 className="FemaleFronted">Female Fronted Heavy-Rock</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
