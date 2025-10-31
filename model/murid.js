const db = require("../config/db")
const mariadb = require("mariadb")

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
})

class _murid_model {
    async getAll() {
        try {
            const conn = await pool.getConnection();

            const sql = {
                query: `SELECT * FROM murid`,
                params: []
            }
            
            const res = await conn.query(sql.query, sql.params)
            
            return {
                status: true,
                data: res
            }
        } catch (error) {
            return {
                status: false,
                error
            }
        }
    }
}

module.exports = new _murid_model()