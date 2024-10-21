const mariadb = require('mariadb');

// async function asyncFunction() {
//     const connection = await mariadb.createConnection({
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         connectionLimit: 5
//     });

//     try {
//         const res = await connection.query("SELECT DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s') as DATETIME");
//         console.log(res);
//         return res;
//     } catch (err) {
//         console.log(err);
//     }
// }

// asyncFunction();
export const db = await mariadb.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 5
});
