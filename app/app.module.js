

(function () {
    'use strict';
    angular.module("app", [
        // Angular Modules
        'ngRoute',
        // App Modules
        
        'app.posts'
        
        // 3rd Party Modules
    ]);
    console.log("app");

    angular.module("app").config(['$routeProvider',
        function ($routeProvider) {
        $routeProvider
            .when('/posts', {
		     controller: 'posts',
                templateUrl: 'app/posts/posts.html'
               
            })
            .otherwise({
                redirectTo:"/posts"
    });
    }]);
    console.log("routes");
})();

