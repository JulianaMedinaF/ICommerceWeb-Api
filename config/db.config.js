const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    password:"July2311",
    database:"commercewebdb",
    host: "localhost",
    port: 5432
});

module.exports = pool;