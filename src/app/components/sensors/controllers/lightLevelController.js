sensorsModule.controller('sensorsLightLevelController', function ($scope, sensorsService) {
    $scope.entries = [];

    $scope.addUnit = function(value){
        return value;
    };

    sensorsService.lightLevel.getAll().success(function(data){
        $scope.entries = data;
    });

    sensorsService.lightLevel.now().success(function(data){
        alert(data.data);
    });
});
