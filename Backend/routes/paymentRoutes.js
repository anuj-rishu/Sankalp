const express = require('express');
const { initiatePayment } = require('../controllers/paymentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/initiate', protect, initiatePayment);

// Additional payment-related routes can be added here

module.exports = router;
