import pg from "pg";

const {Pool} = pg;
const db = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres", 
  database: "boardcamp"
});

export default db;