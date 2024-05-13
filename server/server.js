const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware für das Parsen von JSON-Daten
app.use(express.json());

// POST-Route zum Senden der E-Mail
app.post('/sendEmail', async (req, res) => {
  const { email, message } = req.body;

  // Konfiguration des E-Mail-Transports
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourEmailAddress@gmail.com', // Deine E-Mail-Adresse
      pass: 'yourEmailPassword' // Dein E-Mail-Passwort
    }
  });

  // E-Mail-Optionen
  let mailOptions = {
    from: 'yourEmailAddress@gmail.com', // Deine E-Mail-Adresse
    to: 'tight-rock@webmaster.de', // Empfänger-E-Mail-Adresse
    subject: 'Neue Nachricht von Tight Rock Website',
    text: `E-Mail: ${email}\n\nNachricht: ${message}`
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
