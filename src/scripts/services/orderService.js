/**
 * Created by li_sj on 2016/5/6.
 */
var orderService = ['$resource', function ($resource) {
    return $resource('http://localhost:4000/orders/:id', {id: '@id'}, {
        update: {
            method: 'PUT' // this method issues a PUT request
        }
    });
}]
module.exports = orderService;