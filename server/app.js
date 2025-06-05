const express = require('express');
const twilio = require('twilio');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// TwiML Endpoint
app.post('/voice', (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();
  twiml.say('Hello, this is a test call.');

  res.type('text/xml');
  res.send(twiml.toString());
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
