sensorsModule.controller('sensorsHumidityController', function ($scope, sensorsService) {
    $scope.entries = [];

    $scope.addUnit = function(value){
      return value + " %";
    };

    sensorsService.humidity.getAll().success(function(data){
        $scope.entries = data;
    });
});
