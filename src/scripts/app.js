/**
 * Created by li_sj on 2016/5/6.
 */
angular.module('app.services', []);
angular.module("app.controllers", []);
angular.module('app.ui',[]);
angular.module('app', ["app.services", "app.controllers", "app.ui", "ngRoute", "ngResource"]);

var app = angular.module("app");

app.run(["$rootScope", function($rootScope){
    $rootScope.appVersion = "1.0";
}]);

require('./router');
require('./services/appservices');
require('./derectives/appderectives');
require('./controllers/appController');
