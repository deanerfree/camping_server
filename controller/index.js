const { getData } = require("../data")
// var util = require("util")
// const fs = require("fs")
const { Campground } = require("../model/Campground")

let cleanedMapData = []

// console.log("data brought in", uncleanedData)
const cleanData = (dataList) => {
	dataList.forEach((item) => {
		const campgroundLocation = new Campground(
			item.id,
			item.name,
			item.description,
			item.addresses,
			item.directions,
			item.campsites.totalSites,
			item.latitude,
			item.longitude,
			item.images,
			item.parkCode
		)
		cleanedMapData.push(campgroundLocation)
	})

	return cleanedMapData
}

const getCampsiteData = async (req, res) => {
	if (cleanedMapData.length <= 0) {
		console.log("no data")
		uncleanedData = await getData()
		cleanedMapData = cleanData(uncleanedData)
	}

	res.send({ cleanedMapData })
}

module.exports = { getCampsiteData }
