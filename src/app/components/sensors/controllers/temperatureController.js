sensorModule.controller('sensorsTemperatureController', function ($scope, sensorsFetcher) {
    $scope.entries = [];

    $scope.addUnit = function(value){
        return value + " C";
    };

    sensorsFetcher.temperature.getAll().success(function(data){
        $scope.entries = data;
    });
});
