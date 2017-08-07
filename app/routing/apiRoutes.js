var friends = require("../data/friends.js");

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friends)
	})


	app.post("/api/friends", function(req, res){
		/*add logic for figuring out differences between
	the user input and the users already in the database.
	*/

	var userData = req.body;

	fiends.push(userData)
	})

}