'use strict';

angular.module('app', [
    'ui.router'

]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/test2"); // 要改目前的預設 url
    $stateProvider
    // 加入起 (改 state 名稱 & url 位置 & html 檔案位置)
        .state('test1', {
            url: "/test1",
            templateUrl: "dir-test1/html-t1.html"
        })
        // 加入止
});
