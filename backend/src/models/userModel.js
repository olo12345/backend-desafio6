
import pool from "./../../db/dbconfig.js";
import format from "pg-format"

const isEmailRegistered = async (email) => {
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    return (result.rowCount ? true : false);
}

const createUserModel = async ({ email, password, rol, lenguage: lenguaje }) => {
    const values = [email, password, rol, lenguaje];
    const sqlQuery = "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ('%s', '%s', '%s', '%s')";
    const formattedQuery = format(sqlQuery, ...values);
    const { rowCount } = await pool.query(formattedQuery);
    return rowCount;
}

const loginUserModel = async (email) => {
    const sqlQuery = 'SELECT * FROM usuarios WHERE email = $1';
    const values = [email];
    const result = await pool.query(sqlQuery, values);
    return result;
}

const verificarCredencialesModel = async (email) => {
    const sqlQuery = 'SELECT email, rol, lenguage FROM usuarios WHERE email = $1';
    const result = await pool.query(sqlQuery, [email]);
    return result;
}

export { createUserModel, loginUserModel, verificarCredencialesModel, isEmailRegistered };