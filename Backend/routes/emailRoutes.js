const express = require('express');
const { sendEmailNotification } = require('../controllers/emailController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/send', protect, sendEmailNotification);

module.exports = router;
