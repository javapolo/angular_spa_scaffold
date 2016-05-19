/**
 * Created by li_sj on 2016/5/6.
 */
var orderController = ['$rootScope', '$scope', '$location', 'orderService', function ($rootScope, $scope, $location, Order) {
    $scope.orders = Order.query();

    $scope.order = new Order();

    $scope.addOrder = function(){
        $scope.order.$save(function(){
            window.location.href = "#/orders";
        });
    }

    $scope.removeOrder = function(order){
        order.$delete(function(){
            $scope.orders = Order.query();
            $scope.apply();
        });
    }

}
];
module.exports = orderController;