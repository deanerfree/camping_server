const { getData, getParkData } = require("../data")
// var util = require("util")
// const fs = require("fs")
const { Campground } = require("../model/Campground")
const {
	getListOfEachPark,
	getLongitude,
	getLatitude,
	parksWthCmpGrnds,
} = require("../functions/helperFunctions")

let cleanedMapData = []
let organizedMapData = []

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
	organizedMapData.push(
		getListOfEachPark(cleanedMapData),
		getLatitude(cleanedMapData),
		getLongitude(cleanedMapData)
	)

	return organizedMapData
}

const getCampsiteData = async (req, res) => {
	if (organizedMapData.length <= 0) {
		console.log("no data")
		let uncleanedData = await getData()
		cleanData(uncleanedData)
		// console.log(organizedMapData)
	}
	console.log("data")

	res.send({ organizedMapData })
}

const getNationalParkData = async (req, res) => {
	let initialParkData = await getParkData()
	let initialCampsiteData = await getData()
	let filteredData = parksWthCmpGrnds(initialParkData, initialCampsiteData)
	console.log("what's sent", typeof filteredData)
	res.send({ filteredData })
}
module.exports = { getCampsiteData, getNationalParkData }
