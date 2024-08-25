const Razorpay = require('../config/razorpay');
const Payment = require('../models/Payment');
const Contract = require('../models/Contract');

exports.initiatePayment = async (req, res) => {
  const { contractId, amount } = req.body;
  try {
    const contract = await Contract.findById(contractId);
    if (!contract) {
      return res.status(404).json({ error: 'Contract not found' });
    }
    const paymentOrder = await Razorpay.orders.create({
      amount: amount * 100, 
      currency: 'INR',
      receipt: `receipt_${contractId}`,
    });
    const payment = await Payment.create({
      contract: contractId,
      amount,
      razorpayPaymentId: paymentOrder.id,
    });
    res.status(201).json({ message: 'Payment initiated', paymentOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add payment verification and other payment-related operations here
