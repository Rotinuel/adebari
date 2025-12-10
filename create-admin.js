// scripts/create-admin.js
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

require('dotenv').config();

if (!process.env.DATABASE_URL) {
  console.error('Set DATABASE_URL in .env.local');
  process.exit(1);
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function main() {
  const name = process.argv[2] || 'Admin';
  const email = process.argv[3] || 'admin@example.com';
  const password = process.argv[4] || 'password123';

  const hashed = await bcrypt.hash(password, 10);

  const client = await pool.connect();
  try {
    await client.query(
      `INSERT INTO users (name, email, password_hash, role)
       VALUES ($1,$2,$3,'admin')
       ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash`,
      [name, email, hashed]
    );
    console.log(`Admin created/updated: ${email} / password: ${password}`);
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch(err => { console.error(err); process.exit(1); });
