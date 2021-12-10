const router = require("express").Router()
const {
	getCampsiteData,
	getNationalParkData,
	getNationalParkImageData,
	getCampgroundImageData,
} = require("../controller")

// const axiosRequest2 = axios.get(getNationalParkData)

router.route("/mapItems").get(getCampsiteData)
router.route("/parkLocations").get(getNationalParkData)
router.route("/parkImages").get(getNationalParkImageData)
router.route("/campgroundImages").get(getCampgroundImageData)
router.route("/campgrounds").get(getCampsiteData)

module.exports = router
