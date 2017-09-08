    // config.js
var app = angular.module('todo', ['ui.bootstrap','ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/todo1');

    $stateProvider
    
    // TODO STATE VIEWS
    .state('todo1', {
        url: '/todo1',
        templateUrl: 'tasklist.html',
        controller: 'AppCtrl'
    })

    // HOME STATES VIEWS
    .state('home', {
        url: '/home/:start',
        templateUrl: 'todolist.html',
        controller: 'todoController'
    })
});


