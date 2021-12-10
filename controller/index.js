const { getData, getParkData } = require("../data")
// var util = require("util")
// const fs = require("fs")
const { Campground } = require("../model/Campground")
const {
	getListOfEachPark,
	parksWthCmpGrnds,
	getListOfImageUrls,
} = require("../functions/helperFunctions")
const {
	getLongitude,
	getLatitude,
} = require("../functions/coordinateFunctions")

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
	const initialParkData = await getParkData()
	const initialCampsiteData = await getData()
	const filteredData = parksWthCmpGrnds(initialParkData, initialCampsiteData)
	// const images = getListOfParkImageUrls(filteredData)

	res.send({ filteredData })
}

const getNationalParkImageData = async (req, res) => {
	const initialParkData = await getParkData()
	const images = getListOfImageUrls(initialParkData)
	res.send({ images })
}

const getCampgroundImageData = async (req, res) => {
	const initialParkData = await getData()
	const images = getListOfImageUrls(initialParkData)
	res.send({ images })
}

module.exports = {
	getCampsiteData,
	getNationalParkData,
	getNationalParkImageData,
	getCampgroundImageData,
}
