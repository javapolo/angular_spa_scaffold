/**
 * Created by li_sj on 2016/5/6.
 */
var userService = ['$resource', function ($resource) {
    return $resource('http://localhost:4000/users/:id', {id: '@id'}, {
        update: {
            method: 'PUT' // this method issues a PUT request
        }
    });
}]
module.exports = userService;