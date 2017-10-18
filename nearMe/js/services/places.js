app.factory('places',['$http',function ($http) {
    return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=33.7756178%7C-84.396285&gslimit=30&format=json&callback=JSON_CALLBACK')
        .success(function (data) {
            return data;
        })
        .error(function (data) {
            return data;
        });
}]);