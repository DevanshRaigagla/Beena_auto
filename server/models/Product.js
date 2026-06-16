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
  async find() {
    const res = await db.query('SELECT * FROM products ORDER BY "createdAt" DESC');
    return res.rows.map(parseProduct);
  },

  // GET /api/products/:id
  async findById(id) {
    const res = await db.query('SELECT * FROM products WHERE id = $1', [id]);
    return parseProduct(res.rows[0]);
  },

  // GET /api/products/categories
  async distinct() {
    const res = await db.query('SELECT DISTINCT category FROM products');
    return res.rows.map((r) => r.category);
  },

  // POST /api/products  (admin use)
  async create(data) {
    const insertQuery = `
      INSERT INTO products (name, "oemNumber", category, "modelCompatibility", description, image, "stockStatus")
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `;
    const res = await db.query(insertQuery, [
      data.name,
      data.oemNumber,
      data.category,
      JSON.stringify(data.modelCompatibility || []),
      data.description || '',
      data.image || '',
      data.stockStatus || 'In Stock',
    ]);
    return Product.findById(res.rows[0].id);
  },
};

module.exports = Product;
