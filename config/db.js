const mariadb = require("mariadb")
const dotenv = require("dotenv")
dotenv.config()

async function connect() {
    try {
        const pool = await mariadb.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
        })

        return pool
    } catch (error) {
        console.log(`Can't connect db!`);
    }
}

module.exports = connect