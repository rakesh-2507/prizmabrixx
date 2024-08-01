const client = require('../services/twilioService');

exports.initiateCall = (req, res) => {
    const { to, from, body } = req.body;

    if (!to || !from || !body) {
        return res.status(400).json({ error: 'Required parameters "to", "from", and "body" are missing.' });
    }

    client.calls
        .create({
            to,
            from,
            body
        })
        .then(call => res.json({ message: 'Call initiated successfully', call }))
        .catch(error => res.status(500).json({ error: error.message }));
};
