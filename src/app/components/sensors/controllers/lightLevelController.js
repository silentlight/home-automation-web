sensorModule.controller('sensorsLightLevelController', function ($scope, sensorsFetcher) {
    $scope.entries = [];

    $scope.addUnit = function(value){
        return value;
    };

    sensorsFetcher.lightLevel.getAll().success(function(data){
        $scope.entries = data;
    });
});
