var mongoose = require('mongoose');
var Question = mongoose.model('Question');
module.exports = {
	show: function(req, res){
		Question.find({}, function(err, results){
			if(err){
				console.log(err);
			}
			console.log(results);
			res.send(JSON.stringify(results));
		})
	},
	add: function(req, res){
		console.log('in controller', req.body);
		var new_question = new Question({question: req.body.question, answer: req.body.answer, answer1: req.body.answer1, answer2: req.body.answer2});
		new_question.save(function(err, result){
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
		Question.remove({_id: req.body._id}, function(err, data){
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