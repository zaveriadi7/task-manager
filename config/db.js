const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',        // PostgreSQL username
    host: 'localhost',            // Hostname
    database: 'task_manager',     // Database name
    password: 'tiger',    // PostgreSQL password
    port: 5432,                   // Default PostgreSQL port
});

module.exports = pool;
