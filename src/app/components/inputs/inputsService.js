inputsModule.factory('inputsService', function ($http, apiBaseUrl) {
    return {
        led: {
            status: function(status) { return $http({ method: 'GET', url: apiBaseUrl + '/inputs/led/' + status}) }
        }
    }
});
