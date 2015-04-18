var mongoose = require('mongoose');
var ExamSchema = new mongoose.Schema({
	Question: String,
	Answers: String
})
mongoose.model('Play', ExamSchema)