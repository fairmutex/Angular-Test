

(function () {
    'use strict';

    // Register
    angular
        .module('app.posts')
        .controller('posts',posts);




    // Inject
   posts.$inject =  ['$http'];

    // Function
    function posts($http) {
    
        var vm = this;

        $http.get('app/posts/posts.json')
            .success(function (data, status, header, config) {
		    
                vm.posts = data.records;
            })
            .error(function (data, status, header, config) {
               vm.posts = ['Error']; 
            });
    }

})();


