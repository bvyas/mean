var mongoose = require('mongoose');
var ExamSchema = new mongoose.Schema({
	question: String,
	answer: String,
	answer1: String,
	answer2: String
})
mongoose.model('Question', ExamSchema)