const express = require("express")
const path = require("path")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const app = express()
const middlewares = require("./middlewares/middlewares")

// Define Enviroment Variables
const PORT = process.env.PORT
const CLEARDB_URL = process.env.CLEARDB_URL
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME


// Define paths for Express config
const publicDirectory = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../views")


// Setup Static Directory to Serve
app.use(express.static(publicDirectory))


// Setup EJS Engine
app.set("view engine", "ejs")
app.set("views", viewsPath)


app.use(bodyParser.urlencoded({
	extended: true
}))


// PRODUCTION conection -- Ligação a ClearDB

const connectionPool = mysql.createPool({
	host: CLEARDB_URL,
	user: DB_USER,
	password: DB_PASS,
	database: DB_NAME
})


app.get("/", async (req, res, next) => {

	// Find count of users in DB
	var q = "SELECT COUNT(*) AS count FROM users"

	connectionPool.query(q, function (error, results) {
		if (error) {

			res.render("error", {
				error: error.message
			})
			return next(new Error(error.message))
		}

		var count = results[0].count
		res.render("home", {
			count: count
		})

	})
})


app.post("/register", (req, res, next) => {

	var new_user = {
		email: req.body.email
	}

	connectionPool.query("INSERT INTO users SET ?", new_user, function (error, results) {

		if (error) {
			res.render("error")
			return next(new Error(error))

		} else {
			return res.render("success")
		}
	})
})


// Middleware for Error Handling
app.use(middlewares.errorHandler)

app.listen(PORT || 3000, () => {
	console.log("Server up running on port: " + PORT)
})