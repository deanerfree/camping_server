const listOfParks = (dataList) => {
	const cleanedList = dataList.reduce((prev, nxt) => {
		prev[nxt] = new Array()
		return prev
	}, {})
	return cleanedList
}

const getListOfEachPark = (dataList) => {
	const tempList = []
	dataList.forEach((campground) => {
		return tempList.push(campground.parkCode)
	})
	updatedList = listOfParks(tempList)
	const campground = addCampgroundDataToPark(dataList, updatedList)
	return campground
}

//Çreates a list of campgrounds in each national park
const addCampgroundDataToPark = (dataList, listOfParks) => {
	dataList.forEach((campground) => {
		const listOfObjectKeys = Object.keys(listOfParks)
		listOfObjectKeys.forEach((park) => {
			if (campground.parkCode === park) {
				return listOfParks[park].push(campground)
			}
		})
	})
	return listOfParks
}

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

const getMaxandMin = (dataList) => {
	let values = { max: Math.max(...dataList), min: Math.min(...dataList) }

	return values
}

const removeDuplicates = (array, arg) => {
	const filteredArray = array.filter((obj, index, arr) => {
		return arr.map((mapObj) => mapObj[arg]).indexOf(obj[arg]) === index
	})
	return filteredArray
}

const parksWthCmpGrnds = (ntnlPrks, cmpgrnds) => {
	let matchedList = []
	ntnlPrks.forEach((park) => {
		cmpgrnds.forEach((camp) => {
			if (park.parkCode === camp.parkCode) {
				matchedList.push(park)
			}
		})
	})

	const filteredList = removeDuplicates(matchedList, "id")
	return filteredList
}

module.exports = {
	getListOfEachPark,
	getLongitude,
	getLatitude,
	parksWthCmpGrnds,
}
