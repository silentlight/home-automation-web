sensorsModule.controller('sensorsTemperatureController', function ($scope, sensorsService) {
    $scope.entries = [];

    $scope.addUnit = function(value){
        return value + " C";
    };

    sensorsService.temperature.getAll().success(function(data){
        $scope.entries = data;
    });

    $scope.getCurrentValue = function(){
        sensorsService.temperature.now().success(function(data){
            alert(data.data);
        });
    }
});
