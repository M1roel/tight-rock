const express = require('express');
const nodemailer = require('nodemailer');
const { email, passwort } = require('./emailconfig');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware für das Parsen von JSON-Daten
app.use(express.json());

// CORS-Middleware
app.use(cors({
  origin: 'https://tight-rock.de', // Erlaubt Anfragen nur von Ihrer Domain
  methods: 'POST',
  allowedHeaders: 'Content-Type'
}));

// POST-Route zum Senden der E-Mail
app.post('/sendEmail', async (req, res) => {
  const { email: userEmail, message } = req.body; // Umbenennung von 'email' zu 'userEmail' um Konflikte zu vermeiden

  // Konfiguration des E-Mail-Transports
  let transporter = nodemailer.createTransport({
    host: 'smtp.strato.de', // Hostname des SMTP-Servers
    port: 465, // Port für den SMTP-Server
    secure: true, // Verwendung von SSL/TLS
    auth: {
      user: email, // Verwendung der 'email' Variable direkt
      pass: passwort // Verwendung der 'passwort' Variable direkt
    }
  });

  let mailOptions = {
    from: 'webmaster@tight-rock.de',
    to: 'webmaster@tight-rock.de', // Hinzufügen der Yahoo-Adresse
    subject: 'Neue Nachricht von Tight Rock Website',
    text: `E-Mail: ${userEmail}\n\nNachricht: ${message}`
  };

  // Senden der E-Mail
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('E-Mail erfolgreich gesendet');
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    res.status(500).send('Fehler beim Senden der E-Mail');
  }
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
