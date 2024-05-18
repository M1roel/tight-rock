import ControlledCarousel from "./ControlledCarousel";

function Body() {
  const tourYear = new Date().getFullYear();

  return (
    <div>
      <div className="Tour-main">
        <div className="Tour-container">
        <h2>Tour {tourYear}</h2>
          <ul>
            <li>11.05.2024 - Wesseling, Rheinklang 669-Festival, Kulisse</li>
            <li>07.06.2024 - Grevenbroich, Rock Sommer Nacht</li>
            <li>21.06.2024 - Herdecke, Rockstarter Open Air</li>
            <li>20.07.2024 - Krefeld, Uerdingen, Fuchs-Festival</li>
            <li>27.07.2024 - Postillion, Bergisch Gladbach</li>
            <li>28.09.2024 - Flora 6, Köln</li>
            <li>
              19.10.2024 - Dormagen, Tankstelle with Violet and Fatal Fire
            </li>
            <li>02.11.2024 - Titz-Spiel, MC-Pegasus</li>
            <li>14.12.2024 - Kneipe zum Pitter, Köln</li>
          </ul>
        </div>
        <div className="Tour-station">
          <h3>Nächste Station</h3>
          <p>Rock Sommer Nacht - Grevenbroich: 19:00 Uhr "Tight" </p>
          <img src="/images/Rheinklang.png" alt="Rocksommernacht 2024" className="Tour-foto"></img>
        </div>
      </div>
      <div className="Carousel-container">
        <ControlledCarousel />
      </div>
    </div>
  );
}

export default Body;
