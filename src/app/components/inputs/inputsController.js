inputsModule.controller('inputsController', function ($scope, inputsService) {

    $scope.ledOn = function(){
        inputsService.led.setStatus(1).success(function(data){
            alert("Done!");
        });
    };

    $scope.ledOff = function(){
        inputsService.led.setStatus(0).success(function(data){
            alert("Done!");
        });
    };

    inputsService.led.getStatus().success(function(data){
        alert('Led is currently ' + (data.data == '1' ? 'on' : 'off'))
    });
});
