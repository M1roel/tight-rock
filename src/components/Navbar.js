import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Event Listener zum Überwachen des Scroll-Events hinzufügen
    window.addEventListener('scroll', handleScroll);

    // Event Listener beim Komponentenabbau entfernen
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Überprüfe, ob der Benutzer nach unten gescrollt hat
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div className={isScrolled ? 'Navbar Navbar--scrolled' : 'Navbar'}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="https://tight-rock.myspreadshop.de/">Merch</a></li>
                <li><a href="/tourdaten">Tourdaten</a></li>
                <li><a href="/gallery">Gallerie</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
                <li><a href="/about">Über uns</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
