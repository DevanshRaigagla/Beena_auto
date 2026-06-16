const Inquiry = require('../models/Inquiry');

exports.createInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    res.status(201).json({ message: 'Inquiry submitted successfully!', inquiry });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.findAll();
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
