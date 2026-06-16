const db = require('../config/db');

const Inquiry = {
  // POST /api/inquiries
  async create(data) {
    const insertQuery = `
      INSERT INTO inquiries (name, mobile, email, "carModel", "partName", "vinNumber", notes, type, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id
    `;
    const res = await db.query(insertQuery, [
      data.name,
      data.mobile,
      data.email || '',
      data.carModel,
      data.partName,
      data.vinNumber || '',
      data.notes || '',
      data.type || 'Inquiry',
      'Pending',
    ]);
    const fetchRes = await db.query('SELECT * FROM inquiries WHERE id = $1', [res.rows[0].id]);
    return fetchRes.rows[0];
  },

  // GET /api/inquiries
  async findAll() {
    const res = await db.query('SELECT * FROM inquiries ORDER BY "createdAt" DESC');
    return res.rows;
  },
};

module.exports = Inquiry;
