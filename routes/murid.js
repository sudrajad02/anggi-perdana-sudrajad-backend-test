const express = require("express")
const router = express.Router()
const murid_controller = require("../controller/murid")

router.get('/', async function (req, res) {
    const list = murid_controller.getAll(req, res)
    return list
})

module.exports = router