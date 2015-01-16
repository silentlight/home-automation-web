inputsModule.factory('inputsService', function ($http, apiBaseUrl) {
    return {
        led: {
            setStatus: function(status) { return $http({ method: 'GET', url: apiBaseUrl + '/inputs/led/' + status}) },
            getStatus: function() { return $http({ method: 'GET', url: apiBaseUrl + '/inputs/led-status'}) }
        }
    }
});
