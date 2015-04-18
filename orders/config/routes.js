var customer = require('../server/controllers/customers.js');
var order = require('../server/controllers/orders.js');
module.exports = function(app){
	app.get('/customers', function(req, res){
		customer.show(req, res);
	})
	app.post('/customers', function(req, res){
		customer.add(req, res);
	})
	app.post('/remove_customer', function(req, res){
		customer.remove(req, res);
	})
	app.get('/orders', function(req, res){
		console.log('reached routes')
		order.show_orders(req, res);
	})
	app.post('/orders', function(req, res){
		console.log(req.body)
		order.add(req, res);
	})
}