const router = require("express").Router()
const { getCampsiteData, getNationalParkData } = require("../controller")

// const axiosRequest2 = axios.get(getNationalParkData)

router.route("/mapItems").get(getCampsiteData)
router.route("/parkLocations").get(getNationalParkData)

module.exports = router
