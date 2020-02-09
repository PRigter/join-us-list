# Simple Waitlist Subscription

### About

A simple Web App, connecting to a MySQL Database.
Fetching for data (users) present in the Database, and displaing it on the homepage.
With a form allowing new registrations.

#### Notes: 
Using REGEX, for email validation.

#### Tools:
* Back-end: Node/Express 
* Database: ClearDB


### Installation

#### Setting up a LOCAL server
You will need to:
* 1 - Create a MySQL Database
* 2 - Create a Table for: "users" 
    * 2.1 - Please check the SQL Query File -> init_setup.sql
* 3 - In root of the app -> Create a folder "config" and inside the file ".env"
* 4 - In ".env" create the Enviroment Variables needed to be used in "app.js"
    * - Example
        * - For "CLEARDB_URL" -> replace with "localhost"
        * - For "DB_USER" -> replace with your MySQL user
        * - For "DB_PASS" -> replace with you MYSQL pass
        * - For "DB_name" -> replace with the Database name 


### Start + Develop

To start the App, on root run : "npm run start"
For developing, on app root and run: "npm run dev"


### License

Personal project following examples on a Udemy course.
You can use it completely free.
