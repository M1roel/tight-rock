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
                <li><a href="https://www.amazon.de/Bamboulanka-Tight-T-Shirt/dp/B0DBGBZNM5/ref=sr_1_37?dib=eyJ2IjoiMSJ9.OtaF8P97cSS1S9z4vZjZwQhPrQGrsf5asE94is_rWIAM6nWUq9_w4ojwvE0VzYwAR2sNQkBSXrSBEnG0y0FLgdqEiEKl-tkyYi0BAx4M_x2dPxuy6l68AWgshpn3bTBNlox7M-Srm-SCjV77Pf7M04yiUzJ_0djhL0BYPdNGcIs7XKZDUiOJ5ca82g2fKtkPzIa4HI7qCt-8HS0srqE92IK0xbQcNJa01mniN9dDXqh9AbMtewHIQ__5sVFBOCqAllH5CdyYr7Jq5puJtIkkn3U7KCROu3xg-VIHcL6Ayaw.8AezmZ2gU9JSvo8kbgUF_9Nno89x5PNe24nHOFGxuz4&dib_tag=se&qid=1725701568&refinements=p_4%3ABamboulanka&s=apparel&sr=1-37">Merch</a></li>
                <li><a href="/tourdaten">Tourdaten</a></li>
                <li><a href="/gallery">Gallerie</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
                <li><a href="/about">Über uns</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
