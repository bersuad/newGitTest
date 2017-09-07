//todocontroller.js
app.controller('todoController',todoController);
function todoController($scope, $http, $uibModal, $stateParams){

	$scope.title=$stateParams.start;

	var refresh=function(){
		//Select and display the data
		$http.get('/todolist/'+ $scope.title).success(function(responce){
			console.log("I got the data i requested.");
			console.log($scope.title);
			$scope.todolist=responce;
			$scope.todo="";
		});
	};

	refresh();

	//add todo list
	$scope.addTodolist=function(){
		var modalInstance = $uibModal.open({
			controller:function(items,$scope,$http,$stateParams){
				$scope.addTodolist=function(){
					$scope.title=$stateParams.start;
					$scope.todo.todoId = $scope.title;
					$http.post('/todolist', $scope.todo).success(function(responce){
						$scope.$close(responce);
						console.log($scope.todo);
						console.log($scope.todo.todoId);
						refresh();
					})
				}
			},
			templateUrl: 'addTodo.html',
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
				//update goes here.
				$scope.update=function(){
					$http.put('/todolist/' + $scope.todo._id, $scope.todo).success(function(responce){
						$scope.$close(responce);
					})
				}
			},
			templateUrl: 'editTodo.html',
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