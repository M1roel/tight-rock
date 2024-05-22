import "../styles/App.css";
import "../styles/Tourdaten.css";

function Tourdaten() {
  return (
    <div className="Tourdaten-main">
      <div className="Tourdaten-block">
        <div className="Tourdaten-text">
          <h2>Rock Sommer Nacht 2024, Grevenbroich</h2>
          <p>
            Die Rock Sommer Nacht in Grevenbroich ist mehr als nur ein
            Musikfestival - sie ist eine Feier des Zusammenhalts, der
            Solidarität und der Freude am Geben. Also kommen Sie vorbei,
            genießen Sie die Musik und erleben Sie eine Veranstaltung, die nicht
            nur Herzen zum Tanzen bringt, sondern auch Gutes in unserer
            Gemeinschaft bewirkt.
          </p>
          <span>Am 07.06.2024 findet ihr uns ab 19.00 Uhr auf der Bühne</span>
        </div>
        <div className="Tourdaten-bild">
          <img src="/images/rock-sommer-nacht-2024.jpg" alt="rock-sommer-nacht-2024"></img>
        </div>
      </div>

      <div className="Tourdaten-block">
        <div className="Tourdaten-text">
          <h2>Rockstarter Open Air, Herdecke</h2>
          <p>
            Das Herdecker Rockstarter Open Air ist ein bekanntes Musikfestival,
            das jährlich in Herdecke, Nordrhein-Westfalen, stattfindet. Es
            bietet eine Plattform für lokale und überregionale Rockbands, um
            ihre Musik einem breiten Publikum zu präsentieren. Das Festival
            zeichnet sich durch seine entspannte Atmosphäre und die
            Unterstützung von Nachwuchskünstlern aus. Neben der Musik gibt es
            oft auch ein Rahmenprogramm mit verschiedenen Aktivitäten und
            Verpflegungsständen, die das Event zu einem beliebten Treffpunkt für
            Musikliebhaber machen.
          </p>
        </div>
        <div className="Tourdaten-bild">
          <img src="/images/rockstarter.png" alt="rockstarter-festival-2024"></img>
        </div>
      </div>

      <div className="Tourdaten-block">
        <div className="Tourdaten-text">
          <h2>Fuchs Festival, Krefeld-Uerdingen</h2>
          <p>
            Das Fuchsfestival in Krefeld, Uerdingen, ist ein mit Spannung
            erwartetes Musikfestival, das am 20. Juli 2024 stattfindet. Dieses
            Event wird in einer gemütlichen Kneipe am Rhein ausgerichtet, die
            für ihre entspannte Atmosphäre und ihre abwechslungsreichen
            Veranstaltungen bekannt ist. Die Kneipe in Uerdingen bietet das
            ganze Jahr über zahlreiche Events und Live-Musik-Abende an, bei
            denen Musikliebhaber auf ihre Kosten kommen.
          </p>
        </div>
        <div className="Tourdaten-bild">
          <img src="/images/fuchs-festival.png" alt="fuchs-festival-2024"></img>
        </div>
      </div>
    </div>
  );
}

export default Tourdaten;
