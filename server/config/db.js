const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// ── Create tables ──────────────────────────────────────────────────────────
async function initDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        "oemNumber" VARCHAR(255) NOT NULL UNIQUE,
        category VARCHAR(255) NOT NULL,
        "modelCompatibility" TEXT NOT NULL DEFAULT '[]',
        description TEXT,
        image TEXT,
        "stockStatus" VARCHAR(50) NOT NULL DEFAULT 'In Stock',
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        mobile VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL DEFAULT '',
        "carModel" VARCHAR(255) NOT NULL,
        "partName" VARCHAR(255) NOT NULL,
        "vinNumber" VARCHAR(255),
        notes TEXT,
        type VARCHAR(50) NOT NULL DEFAULT 'Inquiry',
        status VARCHAR(50) NOT NULL DEFAULT 'Pending',
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // ── Seed sample products (only if table is empty) ──────────────────────────
    const productCountRes = await pool.query('SELECT COUNT(*) as cnt FROM products');
    const cnt = parseInt(productCountRes.rows[0].cnt, 10);
    
    if (cnt === 0) {
      const insertQuery = `
        INSERT INTO products (name, "oemNumber", category, "modelCompatibility", description, image, "stockStatus")
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `;

      const productsToSeed = [
        {
          name: 'Front Ceramic Brake Pads',
          oemNumber: '45022-T2G-A01',
          category: 'Braking Systems',
          modelCompatibility: JSON.stringify(['Honda Accord 2013-2017', 'Honda CR-V 2015-2019']),
          description: 'Genuine Honda high-performance ceramic brake pads for maximum stopping power and minimal noise.',
          image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
          stockStatus: 'In Stock',
        },
        {
          name: 'Honda City Oil Filter',
          oemNumber: '15400-PLM-A02',
          category: 'Engine & Oil',
          modelCompatibility: JSON.stringify(['Honda City 2014-2023', 'Honda Jazz 2015-2020']),
          description: 'OEM Honda oil filter for clean engine lubrication and long engine life.',
          image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
          stockStatus: 'In Stock',
        },
        {
          name: 'Air Filter Assembly',
          oemNumber: '17220-5A2-A00',
          category: 'Air & Fuel',
          modelCompatibility: JSON.stringify(['Honda City 2017-2023', 'Honda WR-V 2017-2021']),
          description: 'Factory Honda air filter providing superior filtration and optimal engine airflow.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
          stockStatus: 'In Stock',
        },
        {
          name: 'Clutch Disc Kit',
          oemNumber: '22200-PWG-003',
          category: 'Transmission',
          modelCompatibility: JSON.stringify(['Honda City 2006-2014', 'Honda Jazz 2004-2013']),
          description: 'Complete OEM clutch disc kit for smooth gear transitions and long clutch life.',
          image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
          stockStatus: 'In Stock',
        },
        {
          name: 'Radiator Assembly',
          oemNumber: '19010-RZA-A51',
          category: 'Cooling System',
          modelCompatibility: JSON.stringify(['Honda CR-V 2007-2011', 'Honda Accord 2008-2012']),
          description: 'Genuine Honda radiator ensuring efficient engine cooling and temperature regulation.',
          image: 'https://images.unsplash.com/photo-1609952048180-7b35ea6b083b?auto=format&fit=crop&w=800&q=80',
          stockStatus: 'Out of Stock',
        },
        {
          name: 'Honda City Headlight Assembly (Left)',
          oemNumber: '33150-T9A-H01',
          category: 'Lighting',
          modelCompatibility: JSON.stringify(['Honda City 2017-2020']),
          description: 'OEM Honda City left-side headlight assembly with projector beam and DRL.',
          image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
          stockStatus: 'In Stock',
        },
      ];

      for (const p of productsToSeed) {
        await pool.query(insertQuery, [
          p.name, p.oemNumber, p.category, p.modelCompatibility, p.description, p.image, p.stockStatus
        ]);
      }
      console.log('✅ Postgres DB seeded with sample products.');
    }

    console.log('✅ Postgres database connected & initialized');
  } catch (err) {
    console.error('❌ Database initialization error:', err);
  }
}

// Initialize on startup
initDB();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
