'use strict';

angular.module('app', [
    'ui.router'

]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/test2");
    $stateProvider
        .state('test1', {
            url: "/test1",
            templateUrl: "dir-test1/html-t1.html"
        })
        .state('test2', {
            url: "/test2",
            templateUrl: "dir-test2/html-t2.html"
        })
});
