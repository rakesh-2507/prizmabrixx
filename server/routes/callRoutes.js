const express = require('express');
const router = express.Router();
const callController = require('../controllers/callController');

router.post('/call', callController.initiateCall);

module.exports = router;
