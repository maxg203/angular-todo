var module = angular.module('ToDo', [])
module.controller('todoController', ['$scope', function($scope) {
    $scope.todos = [
        {'title': 'Build a todo app', 'done': false}
    ];

    $scope.addTodo = function() {
        $scope.todos.push({
            'title': $scope.newtodo, 'done': false
        })
        $scope.newtodo = ''
    }
    $scope.clearCompleted = function() {
        $scope.todos = $scope.todos.filter(function(item) {
            return !item.done
        })
    }
}])
