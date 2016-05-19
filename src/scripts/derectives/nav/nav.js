/**
 * Created by li_sj on 2016/5/16.
 */
require("./nav.scss");

angular.module("app.ui").directive('nav', ['$location',
    function($location){
        return{
            restrict:'C',
            controller:'HeaderController',
            link: function($scope, el, attrs){
                console.log(arguments);
            }
        }
    }
]);
angular.module("app.ui").controller('HeaderController', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function (viewLocation) {
        return  $location.path().indexOf(viewLocation) >= 0;
    };
}]);