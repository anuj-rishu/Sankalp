const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema({
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cropDetails: {
    cropType: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  status: { type: String, enum: ['pending', 'confirmed', 'completed'], default: 'pending' },
}, { timestamps: true });

const Contract = mongoose.model('Contract', ContractSchema);
module.exports = Contract;
