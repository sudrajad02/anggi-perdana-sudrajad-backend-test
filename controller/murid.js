const murid_model = require("../model/murid")

class _murid_controller {
    async getAll(req, res) {
        try {
            const murid = await murid_model.getAll()
            return res.status(200).json({
                status: true,
                data: murid.data
            })
        } catch (error) {
            return res.status(400).json({
                status: false,
                error
            })
        }
    }
}

module.exports = new _murid_controller()