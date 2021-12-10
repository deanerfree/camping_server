const { getMaxandMin } = require("./helperFunctions")

//Need to get midpoints for campgrounds
//Need to be able to get Delta values
const getLatitude = (dataList) => {
	// console.log("what", dataList)
	let latitudeList = []

	dataList.forEach((dataPoint) => {
		if (dataPoint.latitude === undefined) {
			return
		}
		latitudeList.push(dataPoint.latitude)
	})
	let latValues = getMaxandMin(latitudeList)
	return latValues
}

//Get a list of the Longitudes then return the Max and Min values
const getLongitude = (dataList) => {
	let longitudeList = []
	// console.log("thing", dataList)
	dataList.forEach((dataPoint) => {
		if (dataPoint.longitude === undefined) {
			return
		}
		if (dataPoint.longitude > 0) {
			dataPoint.longitude = dataPoint.longitude * -1
		}
		// console.log(longitudeList)
		longitudeList.push(dataPoint.longitude)
	})
	let longValues = getMaxandMin(longitudeList)
	return longValues
}

module.exports = {
	getLongitude,
	getLatitude,
}
