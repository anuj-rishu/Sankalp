const Contract = require('../models/Contract');

exports.createContract = async (req, res) => {
  const { farmer, buyer, cropDetails } = req.body;
  try {
    const contract = await Contract.create({ farmer, buyer, cropDetails });
    res.status(201).json({ message: 'Contract created successfully', contract });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add other CRUD operations here (read, update, delete)
