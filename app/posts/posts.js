(function () {
    'use strict';

    // Register
    angular
        .module('app.posts')
        .controller('Posts',Posts);

    // Inject
    Posts.$inject =  ['$http'];

    // Function
    function Posts($http) {
        
        var vm = this;

        $http.get('../mockData/posts.json')
            .success(function (data, status, header, config) {
                vm.posts = data;
            })
            .error(function (data, status, header, config) {
                console.log('Error');

            });
    }

})();


