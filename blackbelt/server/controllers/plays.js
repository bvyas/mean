var mongoose = require('mongoose');
var Play = mongoose.model('Play');
module.exports = {
	show: function(req, res){
		Play.find({}, function(err, results){
			if(err){
				console.log(err);
			}
			console.log(results);
			res.send(JSON.stringify(results));
		})
	},
	add: function(req, res){
		console.log('in controller', req.body);
		var new_game = new Play({question: req.body.question, answer: req.body.answer});
		new_game.save(function(err, result){
			if(err){
				console.log('something wrong');
			}
			else{
				res.json(result);
			}
		})
	},
	remove: function(req,res)
	{
		// console.log('in controller', req.body);
		// console.log(req.body._id);
		Play.remove({_id: req.body._id}, function(err, data){
			if(err)
			{
				console.log('failed to remoce customer');
			}
			else
			{
				res.json(data);
			}
		})
	}
}