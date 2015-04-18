var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
	show: function(req, res){
		User.find({}, function(err, results){
			if(err){
				console.log(err);
			}
			console.log(results);
			res.send(JSON.stringify(results));
		})
	},
	add: function(req, res){
		console.log('in controller', req.body);
		var new_user = new User({name: req.body.name, score: req.body.score, percentage: req.body.percentage});
		new_user.save(function(err, result){
			if(err){
				console.log('something wrong');
			}
			else{
				res.json(result);
			}
		})
	},
}