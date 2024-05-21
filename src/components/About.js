import React, { useEffect } from "react";

import "../styles/About.css";
import "../styles/App.css";

function About() {

  useEffect(() => {
    // Nach dem Rendern das Bild von Kerstin animieren
    const kerstinImage = document.querySelector('.About-kerstin img');
    kerstinImage.classList.add('animate-from-right');

    const kerstinAbout = document.querySelector('.beschreibung_links_kerstin');
    kerstinAbout.classList.add('animate-from-left');

    // Scroll-Handler hinzufügen
    window.addEventListener('scroll', handleScroll);

    // Cleanup-Funktion für den Effekt
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleScroll = () => {
    const rightElements = document.querySelectorAll('.About-mathias img'); // Hier Bilder einfügen
    rightElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top + (element.offsetHeight / 2); // Position des Bildes relativ zur Mitte des Bildes berechnen
      if (elementPosition < window.innerHeight && elementPosition > 0) { // Überprüfen, ob das Bild zur Hälfte im sichtbaren Bereich des Browserfensters liegt
        element.classList.add('animate-from-right');
      }
    });

    const leftElements = document.querySelectorAll('.About-stephan img, .About-joerg img'); // Hier Bilder einfügen
    leftElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top + (element.offsetHeight / 2); // Position des Bildes relativ zur Mitte des Bildes berechnen
      if (elementPosition < window.innerHeight && elementPosition > 0) { // Überprüfen, ob das Bild zur Hälfte im sichtbaren Bereich des Browserfensters liegt
        element.classList.add('animate-from-left');
      }
    });

    const beschreibungLinksElements = document.querySelectorAll('.beschreibung_links');
    beschreibungLinksElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top + (element.offsetHeight / 2);
      if (elementPosition < window.innerHeight && elementPosition > 0) {
        element.classList.add('animate-from-left');
      }
    });

    const beschreibungRechtsElements = document.querySelectorAll('.beschreibung_rechts');
    beschreibungRechtsElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top + (element.offsetHeight / 2);
      if (elementPosition < window.innerHeight && elementPosition > 0) {
        element.classList.add('animate-from-right');
      }
    });
    
  };
 
  return (
    <div className="About-main">
      <div className="About-kerstin">
        <img src="/images/about-kerstin.png" alt="saengerin tight kerstin"></img>
        <div className="beschreibung_links_kerstin">
          <h2>Kerstin - Vocals</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="About-stephan">
        <img src="/images/about-stephan.png" alt="guitar tight stephan"></img>
        <div className="beschreibung_rechts">
          <h2>Stephan - Guitar</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="About-bernd">
        <img src="" alt="drums tight "></img>
        <div className="beschreibung_links">
          <h2>Derzeit unbesetzt - Drums</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="About-joerg">
        <img src="/images/about-joerg.png" alt="bass tight joerg"></img>
        <div className="beschreibung_rechts">
          <h2>Jörg - Bass</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="About-mathias">
        <img src="/images/about-mathias.png" alt="guitar tight mathias"></img>
        <div className="beschreibung_links">
          <h2>M.D. - Guitar</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
