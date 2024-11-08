import React, { useEffect } from "react";

import "../styles/About.css";
import "../styles/App.css";

function About() {
  useEffect(() => {
    // Nach dem Rendern das Bild von Kerstin animieren
    const kerstinImage = document.querySelector(".About-kerstin img");
    kerstinImage.classList.add("animate-from-right");

    const kerstinAbout = document.querySelector(".beschreibung_links_kerstin");
    kerstinAbout.classList.add("animate-from-left");

    // Scroll-Handler hinzufügen
    window.addEventListener("scroll", handleScroll);

    // Cleanup-Funktion für den Effekt
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const rightElements = document.querySelectorAll(".About-mathias img"); // Hier Bilder einfügen
    rightElements.forEach((element) => {
      const elementPosition =
        element.getBoundingClientRect().top + element.offsetHeight / 2; // Position des Bildes relativ zur Mitte des Bildes berechnen
      if (elementPosition < window.innerHeight && elementPosition > 0) {
        // Überprüfen, ob das Bild zur Hälfte im sichtbaren Bereich des Browserfensters liegt
        element.classList.add("animate-from-right");
      }
    });

    const leftElements = document.querySelectorAll(
      ".About-stephan img, .About-joerg img"
    ); // Hier Bilder einfügen
    leftElements.forEach((element) => {
      const elementPosition =
        element.getBoundingClientRect().top + element.offsetHeight / 2; // Position des Bildes relativ zur Mitte des Bildes berechnen
      if (elementPosition < window.innerHeight && elementPosition > 0) {
        // Überprüfen, ob das Bild zur Hälfte im sichtbaren Bereich des Browserfensters liegt
        element.classList.add("animate-from-left");
      }
    });

    const beschreibungLinksElements = document.querySelectorAll(
      ".beschreibung_links"
    );
    beschreibungLinksElements.forEach((element) => {
      const elementPosition =
        element.getBoundingClientRect().top + element.offsetHeight / 2;
      if (elementPosition < window.innerHeight && elementPosition > 0) {
        element.classList.add("animate-from-left");
      }
    });

    const beschreibungRechtsElements = document.querySelectorAll(
      ".beschreibung_rechts"
    );
    beschreibungRechtsElements.forEach((element) => {
      const elementPosition =
        element.getBoundingClientRect().top + element.offsetHeight / 2;
      if (elementPosition < window.innerHeight && elementPosition > 0) {
        element.classList.add("animate-from-right");
      }
    });
  };

  return (
    <div className="About-main">
      <div className="About-kerstin">
        <img
          src="/images/about-kerstin.png"
          alt="saengerin tight kerstin"
        ></img>
        <div className="beschreibung_links_kerstin">
          <h2>Kerstin - Vocals</h2>
          <p>
            Kerstin ist die charismatische Sängerin der Rockband Tight, die mit
            ihrer kraftvollen Stimme und dynamischen Bühnenpräsenz die Herzen
            der Fans erobert. Seit ihrer Kindheit von Musik fasziniert, bringt
            Kerstin ihre Leidenschaft mit Tight auf die Bühne und begeistert das
            Publikum mit energiegeladenen Auftritten. Mit ihrer Liebe zum Rock
            und ihrer beeindruckenden Performance sorgt sie dafür, dass jedes
            Konzert ein unvergessliches Erlebnis wird.
          </p>
        </div>
      </div>
      <div className="About-stephan">
        <img src="/images/about-stephan.png" alt="guitar tight stephan"></img>
        <div className="beschreibung_rechts">
          <h2>Stephan - Guitar</h2>
          <p>
            Stephan ist der talentierte Solo-Gitarrist, Bandgründer und
            Songwriter der Rockband Tight. Mit seinem virtuosen Gitarrenspiel
            und kreativen Songwriting prägt er den einzigartigen Sound der Band.
            Stephan hat Tight ins Leben gerufen, um seine Leidenschaft für
            Rockmusik zu teilen und seine musikalischen Visionen zu
            verwirklichen. Als Songwriter ist Stephan das kreative Herz von
            Tight. Seine Kompositionen zeichnen sich durch eingängige Riffs,
            kraftvolle Melodien und tiefgründige Texte aus, die die Hörer in
            ihren Bann ziehen. Auf der Bühne überzeugt er durch seine technische
            Brillanz und seine energiegeladene Performance, die jedes Konzert zu
            einem besonderen Erlebnis macht.
          </p>
        </div>
      </div>
      <div className="About-bernd">
        <div className="beschreibung_links">
          <h2>Mad Max - Drums</h2>
          <p>
            BESCHREIBUNG UND BILD FOLGEN - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
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
            Jörg ist der erfahrene Bassist von Tight, der mit seinem markanten
            Spiel und seiner tiefen Verbundenheit zur Musik das Fundament der
            Band bildet. Seine präzisen Basslinien verleihen den Songs eine
            kraftvolle und zugleich melodische Dimension, die den Sound von
            Tight einzigartig macht. Jörg ist nicht nur ein Meister seines
            Instruments, sondern auch ein wichtiger Teil des Zusammenhalts in
            der Band. Seine ruhige und bodenständige Art trägt dazu bei, dass
            Tight nicht nur musikalisch, sondern auch menschlich eine
            harmonische Einheit bildet. Mit seinem einfühlsamen Spiel und seiner
            Leidenschaft für die Musik bereichert Jörg jede Tight-Performance
            und lässt das Publikum in den rhythmischen Groove eintauchen.
          </p>
        </div>
      </div>
      <div className="About-mathias">
        <img src="/images/about-mathias.png" alt="guitar tight mathias"></img>
        <div className="beschreibung_links">
          <h2>M.D. - Guitar</h2>
          <p>
            M.D, der Lead-Gitarrist von Tight, fasziniert auf der Bühne mit
            seiner einzigartigen Ausstrahlung. Seine Sonnenbrille und der Hut
            verleihen ihm einen coolen Look, der den Stil der Band
            unterstreicht. Sein Gitarrenspiel ist voller Feuer und Leidenschaft,
            und sein Charisma zieht das Publikum in seinen Bann. M.D ist nicht
            nur ein begnadeter Musiker, sondern auch eine beeindruckende
            Persönlichkeit auf der Bühne. Seine Performance verleiht den
            Tight-Konzerten eine unverwechselbare Atmosphäre, die Fans für immer
            in Erinnerung bleiben wird.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
