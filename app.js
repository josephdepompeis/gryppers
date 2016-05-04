//Define an angular module for our app
// var sampleApp = angular.module('sampleApp', []);
var sampleApp = angular.module('sampleApp', ['ngRoute']);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
	templateUrl: 'templates/add_order.html',
	controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
	templateUrl: 'templates/show_orders.html',
	controller: 'ShowOrdersController'
      }).

      when('/JoeOrders', {
	templateUrl: 'templates/joe_orders.html',
	controller: 'JoeOrdersController'
      }).
      otherwise({
	redirectTo: '/AddNewOrder'
      });
}]);


sampleApp.controller('AddOrderController', function($scope) {

	$scope.message = 'This is Add new order screen';

});


sampleApp.controller('ShowOrdersController', function($scope) {

	$scope.message = 'This is Show orders screen';

});


sampleApp.controller('JoeOrdersController', function($scope, $http) {

	$scope.message = 'This is JOE orders screen';
  //
  // $http({
  //     method: 'GET',
  //     url: 'http://localhost:3001/characters/1.json'
  // }).then(function(response){
  //     console.log(response);
  // })

  //check and see if user is logged in...if they are, show a user icon in the header that is a link to the edit-profile page
  // if($scope.logged === true){
    $http.get('http://localhost:3001/characters/1.json').then(function success(response){
          console.log(response);
        	$scope.message = response;  
      }, function error(response){
        console.log('GET failed in appController');
    });
  // };






});
