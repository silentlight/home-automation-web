inputsModule.controller('inputsController', function ($scope, inputsService) {

    $scope.currentLedStatus = -1;

    $scope.ledOn = function(){
        inputsService.led.setStatus(1).success(function(data){
            $scope.currentLedStatus = 1;
            alert("Done!");
        });
    };

    $scope.ledOff = function(){
        inputsService.led.setStatus(0).success(function(data){
            $scope.currentLedStatus = 0;
            alert("Done!");
        });
    };

    inputsService.led.getStatus().success(function(data){
        $scope.currentLedStatus = data.data;
        alert('Led is currently ' + (data.data == '1' ? 'on' : 'off'));
    });
});
