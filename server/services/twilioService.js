const Twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

if (!accountSid || !authToken) {
    throw new Error("Twilio credentials are missing in environment variables.");
}

const client = new Twilio(accountSid, authToken);

module.exports = client;
