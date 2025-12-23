const { Pool } = require("pg");

const connectionString =
  "postgresql://postgres:Revana@2006@db.gypyxwnzxakkjqgarhbq.supabase.co:5432/postgres";

const pool = new Pool({
  connectionString,
  port: 5432,
  max: 10,
  min: 0,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000,
  maxLifetimeSeconds: 60,
});

pool
  .connect()
  .then(() => console.log("PostgreSQL connected ..."))
  .catch((err) => {
    console.error("Error: ", err.stack);
  });

module.exports = pool;
