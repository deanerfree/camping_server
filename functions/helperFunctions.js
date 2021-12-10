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

const getMaxandMin = (dataList) => {
	let values = { max: Math.max(...dataList), min: Math.min(...dataList) }

	return values
}

// Function that removes duplicate data from a list of objects taking an array and whatever key of object you want to filter
const removeDuplicates = (array, arg) => {
	const filteredArray = array.filter((obj, index, arr) => {
		return arr.map((mapObj) => mapObj[arg]).indexOf(obj[arg]) === index
	})
	return filteredArray
}

//Gets a collection of parks with campgrounds, removes duplicates, adds each campground to each park
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
	filteredList.map((park) => {
		park.campground = []
		cmpgrnds.forEach((camp) => {
			if (park.parkCode === camp.parkCode) {
				park.campground.push(camp)
			}
		})
	})
	return filteredList
}

//Create list of image urls for Parks

const getListOfImageUrls = (dataList) => {
	const imageUrlsList = []
	const locationImage = {}
	dataList.map((item) => {
		locationImage.name = item.name
		locationImage.images = item.images.map((image) => {
			return image
		})
		imageUrlsList.push(locationImage)
	})
	return imageUrlsList
}

// Create list of image url's for campgrounds

module.exports = {
	getListOfEachPark,
	parksWthCmpGrnds,
	getMaxandMin,
	getListOfImageUrls,
}
