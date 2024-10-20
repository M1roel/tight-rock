import ControlledCarousel from "./ControlledCarousel";

function Body() {
  const tourYear = new Date().getFullYear();
  const nextTourYear = tourYear + 1;

  return (
    <div>
      <div className="Tour-main">
        <div className="Tour-container">
          <h2>Tour {tourYear}</h2>
          <ul> 
            <li>02.11.2024, Titz-Spiel, MC-Pegasus</li> 
            <li>14.12.2024, Kneipe zum Pitter, Köln</li>
          </ul>
          <h2>Tour {nextTourYear}</h2>
          <ul> 
            <li>31.01.2025, Dortmund, Musiktheater Piano, Support for Bonfire</li> 
            <li>01.02.2025, Dormagen, Tankstelle with Doro/Warlock-Revival</li> 
            <li>22.02.2025, Siegburg, Kubana with Gun Barrel & Sextrow</li> 
            <li>22.03.2025, The Pogs, Mönchengladbach Rheydt</li> 
            <li>10.05.2025, Krefeld, private Veranstaltung</li> 
            <li>29.05.2025, Hülchrath, Vatertagsrock</li> 
            <li>14.06.2025, Dormagen, Tankstelle, Female Voices Of Rock - Festival</li> 
            <li>26.07.2025, Postillion, Bergisch Gladbach</li> 
            <li>26.09.2025, Bergheim, Gleis 11</li> 
            <li>25.10.2025, Dormagen, Tankstelle with Gun Barrel & Special Guest</li> 
            <li>22.11.2025, Falkos Butze, Tönisforst</li> 
            <li>13.12.2025, Kneipe zum Pitter, Köln</li> 
          </ul>
        </div>
        {/* <div className="Tour-station">
          <h3>Nächste Station</h3>
          <p>Rock Sommer Nacht - Grevenbroich: 19:00 Uhr "Tight" </p>
          <img
            src="/images/Rheinklang.png"
            alt="Rocksommernacht 2024"
            className="Tour-foto"
          ></img>
        </div> */}
      </div>
      <div className="Carousel-container">
        <ControlledCarousel />
      </div>
    </div>
  );
}

export default Body;
