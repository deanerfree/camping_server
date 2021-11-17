const axios = require("axios")
const dotenv = require("dotenv")

dotenv.config()

//Get the campground data
const getData = async () => {
	let dataList = []
	//US longitude data should be negative
	try {
		const url = `${process.env.CAMPGROUND_API_KEY}`
		const data = await axios(url)
		data.data.data.forEach((item) => {
			if (item.longitude > 0) {
				item.longitude = item.longitude * -1
			}
			dataList.push(item)
		})
		return dataList
	} catch (error) {
		console.error(`This is the Error: ${error}`)
	}
}

//Get the national park data
const getParkData = async () => {
	let dataList = []
	//US longitude data should be negative
	try {
		const url = `${process.env.PARKS_API_KEY}`
		const data = await axios(url)
		data.data.data.forEach((item) => {
			if (item.longitude > 0) {
				item.longitude = item.longitude * -1
			}
			dataList.push(item)
		})
		return dataList
	} catch (error) {
		console.error(`This is the Error: ${error}`)
	}
}
module.exports = { getData, getParkData }
