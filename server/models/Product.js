const db = require('../config/db');

// ── Helper: parse modelCompatibility JSON from DB ──────────────────────────
function parseProduct(row) {
  if (!row) return null;
  return {
    ...row,
    modelCompatibility: JSON.parse(row.modelCompatibility || '[]'),
  };
}

const Product = {
  // GET /api/products
  find() {
    const rows = db.prepare('SELECT * FROM products ORDER BY createdAt DESC').all();
    return rows.map(parseProduct);
  },

  // GET /api/products/:id
  findById(id) {
    const row = db.prepare('SELECT * FROM products WHERE id = ?').get(id);
    return parseProduct(row);
  },

  // GET /api/products/categories
  distinct() {
    const rows = db.prepare('SELECT DISTINCT category FROM products').all();
    return rows.map((r) => r.category);
  },

  // POST /api/products  (admin use)
  create(data) {
    const stmt = db.prepare(`
      INSERT INTO products (name, oemNumber, category, modelCompatibility, description, image, stockStatus)
      VALUES (@name, @oemNumber, @category, @modelCompatibility, @description, @image, @stockStatus)
    `);
    const info = stmt.run({
      name: data.name,
      oemNumber: data.oemNumber,
      category: data.category,
      modelCompatibility: JSON.stringify(data.modelCompatibility || []),
      description: data.description || '',
      image: data.image || '',
      stockStatus: data.stockStatus || 'In Stock',
    });
    return Product.findById(info.lastInsertRowid);
  },
};

module.exports = Product;
