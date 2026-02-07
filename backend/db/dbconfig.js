import pg from "pg";
import "dotenv/config";

const pool = new pg.Pool(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        allowExitOnIdle: true
    }
);

pool.query('SELECT NOW()', async (err,res) => {
    if (err) {
        console.log('Error al conectar con la base de datos:', err);
    }
    else {
        //  console.log(await pool.query("select * from usuarios").rows)
        console.log('Conexión exitosa con la base de datos');
    }
})

export default pool;