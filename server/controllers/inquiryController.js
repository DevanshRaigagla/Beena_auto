const Inquiry = require('../models/Inquiry');

exports.createInquiry = (req, res) => {
  try {
    const inquiry = Inquiry.create(req.body);
    res.status(201).json({ message: 'Inquiry submitted successfully', inquiry });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getInquiries = (req, res) => {
  try {
    const inquiries = Inquiry.findAll();
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
