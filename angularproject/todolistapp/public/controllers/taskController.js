	var app = angular.module('todo',['ui.bootstrap','ui.router']);

		app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('/',{
			url:'/todolist/:_id',
			views:{
				main:{
						url:'/todoList/:_id',
						templateUrl:'index.html',
						controller:'todoController',
					}
			}
			
		})
		.state('root',{
			url:'/',
			templateUrl:'index2.html',
			controller:'AppCtrl'
		});
		}]);

	app.controller('AppCtrl',AppCtrl);
	function AppCtrl($scope, $http, $uibModal){
		console.log("Hello from controller");
		//task refresh
		var refreshTask=function(){
			$http.get('/tasks').success(function(responce){
			$scope.tasks=responce;
			$scope.task="";
			});
		};
		refreshTask();
		//add task function
		$scope.addTasks=function(){
			var modalInstance = $uibModal.open({
				controller:function(items,$scope,$http){
					$scope.addTasks=function(){
						$http.post('/tasks', $scope.task).success(function(responce){
							$scope.$close(responce);
							refreshTask();
						})
					}
				},
				templateUrl: 'addTask.html',
				resolve: {
					items: function ($http) {
						return $http.items;
					}
				}

			});
		};
		//remove tasks
		$scope.removeTask= function(id){
			console.log(id);
			$http.delete('/tasks/' + id).success(function(responce){
				refreshTask();
			});
		};
	}
