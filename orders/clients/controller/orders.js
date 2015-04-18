storeApp.controller('OrdersController', function ($scope, OrderFactory){
      
      // function updateCustomers(){
      //   CustomerFactory.getCustomers(function(output){
      //     $scope.customers = output;
      //   });
      // }  
      OrderFactory.getOrders(function(res_fac){
        $scope.orders = res_fac;
        console.log(res_fac)
      })   
      $scope.addOrder = function(){
        OrderFactory.addOrder($scope.new_order, function(data){
          $scope.orders = data;
          $scope.new_order = {};
          OrderFactory.getOrders(function(res_fac){
            $scope.orders = res_fac;
            console.log(res_fac)
          })
        })
      }
        });