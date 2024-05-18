import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Kontakt() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Verhindern des Standardverhaltens des Formulars
    const formData = {
      email: event.target.elements.email.value,
      nachricht: event.target.elements.nachricht.value
    };

    try {
      const response = await fetch('http://localhost:3001/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Nachricht erfolgreich gesendet!');
      } else {
        alert('Fehler beim Senden der Nachricht');
      }
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
      alert('Fehler beim Senden der Nachricht');
    }
  };

  return (
    <div className="Kontakt-container">
      <div className="Kontakt-main">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Deine eMail Adresse</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nachricht">
            <Form.Label>Deine Nachricht an uns</Form.Label>
            <Form.Control as="textarea" rows={5} />
            <Button className="Kontakt-button" variant="primary" type="submit">Senden</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Kontakt;
