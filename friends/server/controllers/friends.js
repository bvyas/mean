var mongoose = require('mongoose');
var Friend = mongoose.model('friend');
module.exports = (function() {
  return {
    show: function(req, res) {
      //res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 35}]);
       Friend.find({}, function(err, results) {
    if(err) {
      console.log(err);
    } else {
      console.log(results);
      res.json(results);
    	}
    	})
   	},
    add: function(req, res) {
    	 var friend = new Friend({name: req.body.name, age:req.body.age})
        friend.save(function(err, results) {
    if(err) {
      console.log(err);
    } else {
      res.json(results);
    	}
    	})
   	},
   delete: function(id) {
      //res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 35}]);
       Friend.delete({}, function(err, results) {
    if(err) {
      console.log(err);
    } else {
      console.log(results);
      res.json(results);
   	 }
   	 })
  	 }
    }
	})();