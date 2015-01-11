sensorModule.factory('sensorsFetcher', function ($http, apiBaseUrl) {
    return {
        temperature: {
            getAll: function() { return $http({ method: 'GET', url: apiBaseUrl + '/sensors/temperature'}) }
        },
        humidity: {
            getAll: function() { return $http({ method: 'GET', url: apiBaseUrl + '/sensors/humidity'}) }
        },
        lightLevel: {
            getAll: function() { return $http({ method: 'GET', url: apiBaseUrl + '/sensors/light-level'}) }
        }
    }
});
