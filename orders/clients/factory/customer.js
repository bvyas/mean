storeApp.factory('CustomerFactory', function($http){
  var factory = {};
  var customers = [];
  factory.getCustomers = function(callback){
       $http.get('/customers').success(function(resdata){
         customers = resdata;
         callback(customers);
       })
  }
  factory.addCustomer = function(data, callback){
     $http.post('/customers', {name: data}).success(function(somedata){
       //customers.push({name:data.name, date:data.date})
       //callback(customers);
     })
  }
  factory.removeCustomer = function(data, callback){

    $http.post('/remove_customer', data).success(function(response)
    {

    })
  }
  return factory;
})