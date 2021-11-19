const express = require("express")
const app = express()
const routes = require("./routes/routes")
const dotenv = require("dotenv")

dotenv.config()

app.get("/", (req, res) => {
	res.send("Hello")
})

app.use("/api/v1", routes)

app.listen(4001, process.env.PORT, () => {
	console.log(`You are connected to ${process.env.PORT}`)
})
