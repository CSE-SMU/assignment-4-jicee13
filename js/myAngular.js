var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope, $filter) {
    $scope.todoList = [{todoText:'asd', todoDescText'ugh', todoDateText'1/1/2016', done:true}];
    var orderBy = $filter('orderBy');
    $scope.searchList = '';



    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, todoDescText:$scope.todoDescInput, todoDateText:$scope.todoDateInput,done:false});
        $scope.todoInput = "";
        $scope.todoDateInput = "";
        $scope.todoDescInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };

    $scope.order = function(predicate) {
      $scope.predicate = predicate;
      $scope.todoList = orderBy($scope.todoList, predicate);
    };
    $scope.order('todoDateText');
});
