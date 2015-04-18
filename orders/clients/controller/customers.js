storeApp.controller('CustomersController', function ($scope, CustomerFactory){
      
      // function updateCustomers(){
      //   CustomerFactory.getCustomers(function(output){
      //     $scope.customers = output;
      //   });
      // }     
      $scope.addCustomer = function(){
        CustomerFactory.addCustomer($scope.new_customer, function(data){
          $scope.customers = data;
          $scope.new_customer = {};
        })
      }
      CustomerFactory.getCustomers(function(res_fac){
        $scope.customers = res_fac;
      })
      $scope.removeCustomer = function(customer){
        console.log(customer);
         CustomerFactory.removeCustomer(customer, function(data){
         $scope.customers = data;
        })
      }
        });