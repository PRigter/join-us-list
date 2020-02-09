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


app.use(bodyParser.urlencoded({extended: true}))



// CONEXÃO AO SQL SERVER -- DESKTOP ASUS

// const connectionPool = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "Azul2019*",
// 	database: "join_us"
// })


// CONEXÃO AO SQL SERVER -- DESKTOP VIBOX + UBUNTU

// const connectionPool = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "Admin2020*",
// 	database: "join_us"
// })




// CONEXÃO AO CLEARDB - HEROKU DATABASE **** usar a seguinte -> connectionPool

// 	const connection = mysql.createConnection({
// 	host: "eu-cdbr-west-02.cleardb.net",
// 	user: "bbe869b94a9a54",
// 	password: "4c9c6e53",
// 	database: "heroku_1b60244069df935"
// })



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
	
	connectionPool.query(q, function(error, results) {
		if (error) {
			
			res.render("error", { error: error.message })
			return next(new Error(error.message))
		}

	
		var count = results[0].count
		console.log(count)
		
		res.render("home", {count: count})
		
	 })
	
	

})


app.get("/greeting/:name", async (req, res, next) => {
	// const { name } = req.params  -- desconsctructing do OBJECTO passado em req.params (mas .name também dá)
	const name = req.params.name
	console.log(name)

	if (name == "Fonix") {
		return next(new Error("We cannot say that name!"))
	}


	// console.log("after error")
	return res.send(`Hello there ${name}!`)

})





const functionThatThrowsError = function () {
	throw new Error("error from DB")
}

app.get("/test", async (req, res, next) => {
	
	try {
		// res.send("Connection to DB, so far, so good.")
		var dbConnection = functionThatThrowsError()
		res.send(dbConnection)

	} catch (e) {
		// console.error("error:", e.stack)
		next(e)
	}

})




app.post("/register", (req, res, next) => {
	// console.log("Email is "+ req.body.email)
	
		var new_user = { email: req.body.email }
		console.log(new_user)
	
		connectionPool.query("INSERT INTO users SET ?", new_user, function (error, results) {
			
			// const errorMessage = error.message
			// console.log(error)
			// console.log(errorMessage)

			if(error) {
				res.render("error")
				return next(new Error(error))
			
			} else {
				return res.render("success")
			}

			// if (errorMessage == "ER_DUP_ENTRY: Duplicate entry '' for key 'unique_email'") {
				
			// 	res.render("error", { error: errorMessage })				
				
			// 	return next(new Error(error.message))
			// 	// return res.send("Ups.. Error from DB")

			// } else {
			// 	return res.render("success")
			// }
			

		})

	
		// res.send("Thanks for joining our wait list! See you soon")


})



app.get("/success", (req, res, next) => {
	res.render("success")
})




app.get("/modal", async (req, res, next) => {
	res.render("modal")
	console.log("Requested the Modal page")

})


app.get("/joke", async (req, res) => {
	var joke ="What do you call a dog that does magic tricks? A labracadabrador!!"
	res.send(joke)
	console.log("Request the Joke Route!")
	
})

app.get("/random_number", async (req, res) => {
	
	var random_number = Math.floor(Math.random() * 10) + 1
	res.send("Your lucky Number is: " + random_number)
	
})


app.get("/flex", async (req, res) => {
		res.render("flex")
})



app.use(middlewares.errorHandler)



app.listen(PORT || 3000, () => {
	console.log("Server up running on port: " + PORT)
})