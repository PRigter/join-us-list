var express = require("express")
var mysql = require("mysql")
var bodyParser = require("body-parser")
var app = express()



app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))


var connection = mysql.createConnection({
	host: "eu-cdbr-west-02.cleardb.net",
	user: "bbe869b94a9a54",
	password: "4c9c6e53",
	database: "heroku_1b60244069df935"
})




app.get("/", async (req, res) => {
	// Find count of users in DB
	var q = "SELECT COUNT(*) AS count FROM users"
	
	// connection.query(q, function(error, results) {
	// 	if(error) throw error
	// 	var count = results[0].count
	// 	console.log(count)
		
	// // 	// res.send("We have " + count + " users in our DB!")
	// 	res.render("home", {count: count})
		
	//  })
	

	res.render("home", {count: count})

})


app.post("/register", async (req, res) => {
	// console.log("Email is "+ req.body.email)
	
	var new_user = { email: req.body.email }
	console.log(new_user)
	
	connection.query("INSERT INTO users SET ?", new_user, function(error, results) {
		if(error) throw error
		
		res.send("Thanks for joining our wait list! See you soon")
		// res.redirect("/")	
	})

	
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


const PORT = process.env.PORT
app.listen(PORT || 3000, () => {
	console.log("Server up running on port: " + PORT)
})