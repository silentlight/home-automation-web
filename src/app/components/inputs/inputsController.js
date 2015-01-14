inputsModule.controller('inputsController', function ($scope, inputsService) {

    $scope.ledOn = function(){
        inputsService.led.status(1).success(function(data){
            alert("Done!");
        });
    };

    $scope.ledOff = function(){
        inputsService.led.status(0).success(function(data){
            alert("Done!");
        });
    };
});
