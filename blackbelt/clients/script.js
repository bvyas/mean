var gameApp = angular.module('gameApp', ['ngRoute']);

gameApp.config(function ($routeProvider) {
      $routeProvider
      
        .when('/',{
            templateUrl: '/partials/users.html',
        })
        .when('/AddQuestion',{
            templateUrl: '/partials/questions.html',            
        })
        .when('/Play',{
            templateUrl: '/partials/play.html',            
        })
        .otherwise({
          redirectTo: '/'
        });
    });