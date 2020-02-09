
const errorHandler = function(error, req, res, next) {

    console.log("Middleware the man, catch this error: " + error)
    const errorMessage = error.message
    console.log("Middleware catch this error and it's message is: " + errorMessage)

    // console.error(errorMessage, error.stack)
    // console.error(error.message)
    // res.send({ error: errorMessage })

    
    // res.redirect("/")
    
   
}


module.exports = { errorHandler }