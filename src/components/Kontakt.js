import React from "react";
import "../styles/kontakt.css";
import { useForm, ValidationError } from "@formspree/react";

function Kontakt() {
  const [state, handleSubmit] = useForm("xleqqegd");
  if (state.succeeded) {
    return <p className="returnform">Vielen Dank für Ihre Nachricht!</p>;
  }
  return (
    <div className="contactform">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Deine eMail Adresse</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Deine Nachricht an uns</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Senden
        </button>
      </form>
      <p>
        Stephan Georg Schwenke<br /> 
        Booking & Management<br /> 
        Bergstraße 3<br />
        41569 Rommerskirchen<br /> 
        Tel.: 0172/2714564
      </p>
    </div>
  );
}

export default Kontakt;
