app.controller('MainController', ['$scope','places', function($scope,places) {
    $scope.center = {
        lat: 33.7756178,
        lng: -84.396285,
        zoom: 17
    };
    places.success(function(data){
        $scope.geodata = data;
        $scope.markers = geodataToMarkers($scope.geodata);
    });
}]);