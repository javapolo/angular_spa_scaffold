/**
 * Created by li_sj on 2016/5/6.
 */
var userController = ['$scope', 'userService', function ($scope, User) {
    $scope.users = User.query();

    $scope.user = new User();

    $scope.addUser = function(){
        $scope.user.$save(function(){
             window.location.href = "#/users";
        });
    }

    $scope.removeUser = function(user){
        user.$delete(function() {
          //  window.location.href = "#/users";
            $scope.users = User.query();
            $scope.apply();
        });
    }
}
];
module.exports = userController;