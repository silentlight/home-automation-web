sensorsModule.factory('sensorsService', function ($http, apiBaseUrl) {
    return {
        temperature: {
            getAll: function() { return $http({ method: 'GET', url: apiBaseUrl + '/sensors/temperature/history'}) },
            now: function() { return $http({ method: 'GET', url: apiBaseUrl + '/sensors/temperature/now'}) }
        },
        humidity: {
            getAll: function() { return $http({ method: 'GET', url: apiBaseUrl + '/sensors/humidity/history'}) },
            now: function() { return $http({ method: 'GET', url: apiBaseUrl + '/sensors/humidity/now'}) }
        },
        lightLevel: {
            getAll: function() { return $http({ method: 'GET', url: apiBaseUrl + '/sensors/light-level/history'}) },
            now: function() { return $http({ method: 'GET', url: apiBaseUrl + '/sensors/light-level/now'}) }
        }
    }
});
