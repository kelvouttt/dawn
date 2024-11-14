const mariadb = require('mariadb');

export const db = await mariadb.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 5
});

async function testConnection() {
      try {
        const [rows] = await db.execute('SELECT * FROM SECTIONS');
        console.log('💾 Database connected successfully');
     } catch (error) {
        console.log('Database connection failed', error)
      }
}

testConnection();