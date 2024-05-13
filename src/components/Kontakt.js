import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Kontakt() {
    return (
      <div className="Kontakt-container">
        <div className="Kontakt-main">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Deine eMail Adresse</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Deine Nachricht an uns</Form.Label>
              <Form.Control as="textarea" rows={5} />
              <Button variant="primary" type="submit">Senden</Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
  
  export default Kontakt;