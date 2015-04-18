 var friends = require('./../server/controllers/friends.js');

 module.exports = function(app) {
    app.get('/friends', function(req, res) {
    	friends.show(req, res);
      //res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 34}]);
    });
    app.post('/add_friends', function(req, res) {
    	friends.add(req,res);
    });
    app.get('/delete_friends', function(req, res) {
    	friends.delete(req, res);
      //res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 34}]);
    });
  }