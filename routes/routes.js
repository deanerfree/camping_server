const router = require("express").Router()
const { getCampsiteData } = require("../controller")

router.route("/mapItems").get(getCampsiteData)

module.exports = router
