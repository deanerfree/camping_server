let Campground = class {
	constructor(
		id,
		name,
		description,
		address,
		directions,
		totalSites,
		latitude,
		longitude,
		images,
		parkCode,
		campground
	) {
		this.id = id
		this.name = name
		this.description = description
		this.address = address
		this.directions = directions
		this.totalSites = parseInt(totalSites)
		this.latitude = parseFloat(latitude)
		this.longitude = parseFloat(longitude)
		this.coordinates = { latitude: this.latitude, longitude: this.longitude }
		this.images = images
		this.parkCode = parkCode
		this.campground = [campground]
	}
}

module.exports = { Campground }
