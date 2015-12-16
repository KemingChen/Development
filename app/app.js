'use strict';

angular.module('app', [
    'ui.router'

]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/test2");
    $stateProvider;
});
