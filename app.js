const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const murid_route = require("./routes/murid")

dotenv.config()

const app = express()
const port = process.env.PORT || 3001
app.use(cors())
app.use(morgan('dev'))

app.use('/api/murid', murid_route)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})
