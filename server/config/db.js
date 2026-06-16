const Database = require('better-sqlite3');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'beena_auto.db');

const db = new Database(DB_PATH);

// Enable WAL mode for better performance
db.pragma('journal_mode = WAL');

// ── Create tables ──────────────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    name            TEXT    NOT NULL,
    oemNumber       TEXT    NOT NULL UNIQUE,
    category        TEXT    NOT NULL,
    modelCompatibility TEXT NOT NULL DEFAULT '[]',
    description     TEXT,
    image           TEXT,
    stockStatus     TEXT    NOT NULL DEFAULT 'In Stock',
    createdAt       TEXT    NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS inquiries (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT NOT NULL,
    mobile      TEXT NOT NULL,
    email       TEXT NOT NULL DEFAULT '',
    hondaModel  TEXT NOT NULL,
    partName    TEXT NOT NULL,
    vinNumber   TEXT,
    notes       TEXT,
    type        TEXT NOT NULL DEFAULT 'Inquiry',
    status      TEXT NOT NULL DEFAULT 'Pending',
    createdAt   TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

// ── Seed sample products (only if table is empty) ──────────────────────────
const productCount = db.prepare('SELECT COUNT(*) as cnt FROM products').get();
if (productCount.cnt === 0) {
  const insert = db.prepare(`
    INSERT INTO products (name, oemNumber, category, modelCompatibility, description, image, stockStatus)
    VALUES (@name, @oemNumber, @category, @modelCompatibility, @description, @image, @stockStatus)
  `);

  const seed = db.transaction((products) => {
    for (const p of products) insert.run(p);
  });

  seed([
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
  ]);

  console.log('✅ SQLite DB seeded with sample products.');
}

console.log(`✅ SQLite database connected: ${DB_PATH}`);

module.exports = db;
