var userService = require('./userService'),
    orderService =  require('./orderService');

angular.module("app.services").
    factory('userService', userService).
    factory('orderService', orderService);


