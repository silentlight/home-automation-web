sensorModule.controller('sensorsHumidityController', function ($scope, sensorsFetcher) {
    $scope.entries = [];

    $scope.addUnit = function(value){
      return value + " %";
    };

    sensorsFetcher.humidity.getAll().success(function(data){
        $scope.entries = data;
    });
});
