	var app = angular.module('todo',['ui.bootstrap','ui.router']);
	//todocontroller start
		app.controller('todoController',todoController);
		function todoController($scope, $http, $uibModal, $stateParams){

			$scope.tId=$stateParams._id;
			
			var refresh=function(){
				$http.get('/todolist').success(function(responce){
					console.log("I got the data i requested.");
					$scope.todolist=responce;
					$scope.todo="";
				});
			};
			refresh();

		//add todo list
		$scope.addTodolist=function(){
			var modalInstance = $uibModal.open({
				controller:function(items,$scope,$http){
					$scope.addTodolist=function(){
						$http.post('/todolist', $scope.todo).success(function(responce){
							$scope.$close(responce);
							console.log($scope.todo);
							refresh();
						})
					}
				},
				templateUrl: 'addModal.html',
				resolve: {
					items: function ($http) {
						return $http.items;
					}
				}

			});

		};

		//remove todolists
		$scope.remove= function(id){
			console.log(id);
			$http.delete('/todolist/' + id).success(function(responce){
				refresh();
			});
		};

		//edit todolists
		$scope.edit= function(id){
			console.log(id);
			var modalInstance = $uibModal.open({
				controller:function(items,$scope,$http){
					$scope.todo={};
					$scope.todo = items.data;
					$scope.update=function(){
						$http.put('/todolist/' + $scope.todo._id, $scope.todo).success(function(responce){
							$scope.$close(responce);
						})
					}
				},
				templateUrl: 'editModal.html',
				resolve: {
					items: function ($http) {
						return $http.get('/todolist/' + id)
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				refresh();
			});
		};	
	}