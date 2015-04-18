var mongoose = require('mongoose');
var ExamSchema = new mongoose.Schema({
	name: String,
	score: Number,
	percentage: Number

})
mongoose.model('User', ExamSchema)