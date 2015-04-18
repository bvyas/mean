var user = require('../server/controllers/users.js');
var question = require('../server/controllers/questions.js');
var play = require('../server/controllers/plays.js');
var bodyParser = require("body-parser");
module.exports = function(app){
	app.get('/questions', function(req, res){
		question.show(req, res);
	})
	app.post('/questions', function(req, res){
		question.add(req, res);
	})

	
	app.post('/plays', function(req, res){
		//console.log(req.body)
		play.add(req, res);
	})
	app.get('/plays', function(req, res){
		//console.log('reached routes')
		play.show(req, res);
	})

	app.post('/users', function(req, res){
		//console.log(req.body)
		user.add(req, res);
	})
	app.get('/users', function(req, res){
		//console.log('reached routes')
		user.show(req, res);
	})
}