storeApp.factory('OrderFactory', function($http){
  var factory = {};
  var orders = [];
  factory.getOrders = function(callback){
       $http.get('/orders').success(function(resdata){
        console.log('factory', resdata)
         orders = resdata;
         callback(orders);
       })
  }
  factory.addOrder = function(data, callback){
     $http.post('/orders', {name: data.name, product: data.product, quantity: data.quantity}).success(function(somedata){
       //customers.push({name:data.name, date:data.date})
       callback();
     })
  }
   return factory;
})