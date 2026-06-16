const db = require('../config/db');

const Inquiry = {
  // POST /api/inquiries
  create(data) {
    const stmt = db.prepare(`
      INSERT INTO inquiries (name, mobile, email, hondaModel, partName, vinNumber, notes, type, status)
      VALUES (@name, @mobile, @email, @hondaModel, @partName, @vinNumber, @notes, @type, @status)
    `);
    const info = stmt.run({
      name: data.name,
      mobile: data.mobile,
      email: data.email || '',
      hondaModel: data.hondaModel,
      partName: data.partName,
      vinNumber: data.vinNumber || '',
      notes: data.notes || '',
      type: data.type || 'Inquiry',
      status: 'Pending',
    });
    return db.prepare('SELECT * FROM inquiries WHERE id = ?').get(info.lastInsertRowid);
  },

  // GET /api/inquiries
  findAll() {
    return db.prepare('SELECT * FROM inquiries ORDER BY createdAt DESC').all();
  },
};

module.exports = Inquiry;
