sensorsModule.factory('sensorsService', function ($http, apiBaseUrl) {
    return {
        temperature: {
            getAll: function() { return $http({ method: 'GET', url: apiBaseUrl + '/sensors/temperature/history'}) }
        },
        humidity: {
            getAll: function() { return $http({ method: 'GET', url: apiBaseUrl + '/sensors/humidity/history'}) }
        },
        lightLevel: {
            getAll: function() { return $http({ method: 'GET', url: apiBaseUrl + '/sensors/light-level/history'}) }
        }
    }
});
