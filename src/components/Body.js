import ControlledCarousel from "./ControlledCarousel";

function Body() {
  const tourYear = new Date().getFullYear();

  return (
    <div>
      <div className="Year-container">
        <h2>Tour {tourYear}</h2>
      </div>
      <div className="Tour-container">
        <ul>
          <li>11.05.2024 - Wesseling, Rheinklang 669-Festival, Kulisse</li>
          <li>21.06.2024 - Herdecke. Rockstarter Open Air</li>
          <li>20.07.2024 - Krefeld, Uerdingen, Fuchs-Festival</li>
          <li>27.07.2024 - Postillion, Bergisch Gladbach</li>
          <li>28.09.2024 - Flora 6, Köln</li>
          <li>19.10.2024 - Dormagen, Tankstelle with Violet and Fatal Fire</li>
          <li>02.11.2024 - Titz-Spiel, MC-Pegasus</li>
          <li>14.12.2024 - Kneipe zum Pitter, Köln</li>
        </ul>
      </div>
      <ControlledCarousel />
    </div>
  );
}

export default Body;
