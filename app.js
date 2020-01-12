var express = require("express")
var mysql = require("mysql")
var bodyParser = require("body-parser")
var app = express()



app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))


// var connection = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	database: "join_us"
// })




app.get("/", async (req, res) => {
	// Find count of users in DB
	// var q = "SELECT COUNT(*) AS count FROM users"
	
	// connection.query(q, function(error, results) {
	// 	if(error) throw error
	// 	var count = results[0].count
	// 	console.log(count)
		
	// 	// res.send("We have " + count + " users in our DB!")
	// 	res.render("home", {count: count})
		
    // })
    

    res.render("home")


})


app.post("/register", async (req, res) => {
	// console.log("Email is "+ req.body.email)
	
	var person = { email: req.body.email }
	
	connection.query("INSERT INTO users SET ?", person, function(error, results) {
		if(error) throw error
		
		// res.send("Thanks for join our wait list")
		res.redirect("/")
		
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