 var mongoose = require('mongoose');
 var Order = mongoose.model('Order');
 module.exports = {
 	show_orders: function(req, res){
 		console.log('reached controller')
 		Order.find({}, function(err, results){
 			if(err){
 				console.log(err);
 			}
 			console.log(results);
 			res.json(results);
 		})
 	},
 	add: function(req, res){
 		console.log('in controller', req.body);
 		var new_order = new Order({name: req.body.name, product: req.body.product, quantity: req.body.quantity,});
 		new_order.save(function(err, result){
 			if(err){
				console.log('something wrong');
			}
			else{
				res.json(result);
		}
 		})
 	},
 }
