const mariadb = require('mariadb');

export const db = await mariadb.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    password: process.env.DB_ROOT_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    connectionLimit: 20000
});

async function testConnection() {
      try {
        const [rows] = await db.execute('SELECT 1');
        console.log(rows)
        console.log('💾 Database connected successfully');
     } catch (error) {
        console.log('Database connection failed', error)
      }
}

testConnection();