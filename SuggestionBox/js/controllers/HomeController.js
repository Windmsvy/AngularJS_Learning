app.controller('HomeController',['$scope','suggest',function ($scope,suggest) {
    $scope.suggestions = suggest.posts;
}]);