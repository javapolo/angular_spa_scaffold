var controllerModule = angular.module('app.controllers'),
    userController = require('./userController'),
    orderController = require('./orderController');
controllerModule.controller('userController', userController);
controllerModule.controller('orderController', orderController);
controllerModule.controller('ngController', ['$scope', "$interpolate", function($scope, $interpolate){
    $scope.user = {
        name:'zhangsan'
    }
    var exp = $interpolate('Hello {{name | uppercase}}!');
    console.log(angular.isDate("2012"));
    console.log(exp({name:'Angular'}));
}]);
