/**
 * Created by li_sj on 2016/5/16.
 */
angular.module('app').config(function ($routeProvider, $locationProvider){
    $routeProvider.when("/orders", {
        templateUrl: "/pages/order/order.html",
        controller: "orderController"
    }).when("/orders_add", {
        templateUrl: "/pages/order/order_add.html",
        controller: "orderController"
    }).when("/users", {
        templateUrl: "/pages/user/user.html",
        controller: "userController"
    }).when("/users_add", {
        templateUrl: "/pages/user/user_add.html",
        controller: "userController"
    });
});