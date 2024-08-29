const express = require('express');
const { createContract } = require('../controllers/contractController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', protect, createContract);

// Additional CRUD routes for contracts can be added here

module.exports = router;
