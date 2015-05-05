/// <reference path="c:\users\stephan\documents\visual studio 2013\Projects\DietMalta\DietMalta.Web\Scripts/angular.js" />
/// <reference path="c:\users\stephan\documents\visual studio 2013\Projects\DietMalta\DietMalta.Web\Scripts/angular-route.js" />

(function () {
    'use strict';
    angular.module("app", [
        // Angular Modules
        'ngRoute',
        // App Modules
        
        'app.posts'
        
        // 3rd Party Modules
    ]);
})();



(function () {
    'use strict';
    angular.module("app").config(['$routeProvider',
        function ($routeProvider) {
        $routeProvider
            .when('/Posts', {
                templateUrl: 'posts/posts.html',
                controller: 'posts/posts.js'
            })
            .otherwise({
                rediretTo:"/"
    });
    }]);
})();

