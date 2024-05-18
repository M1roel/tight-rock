import { useEffect } from "react";
import "../styles/App.css";
import "../styles/Tourdaten.css";

function Tourdaten() {
  return (
    <div className="Tourdaten-main">
      <div className="Tourdaten-left">
        <div className="Rock-sommer-nacht-text">
          <h2>Rock Sommer Nacht 2024, Grevenbroich</h2>
          <p>
            Die Rock Sommer Nacht in Grevenbroich ist mehr als nur ein
            Musikfestival - sie ist eine Feier des Zusammenhalts, der
            Solidarität und der Freude am Geben. Also kommen Sie vorbei,
            genießen Sie die Musik und erleben Sie eine Veranstaltung, die nicht
            nur Herzen zum Tanzen bringt, sondern auch Gutes in unserer
            Gemeinschaft bewirkt.
          </p>
        </div>
        <div className="Rock-sommer-nacht-bild">
            <img src="/images/rock-sommer-nacht-2024.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default Tourdaten;