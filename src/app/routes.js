homeAutomationApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/components/home/homeView.html',
            controller: 'homeController'
        })
        .when('/sensors/temperature', {
            templateUrl: 'app/components/sensors/sensorsView.html',
            controller: 'sensorsTemperatureController'
        })
        .when('/sensors/humidity', {
            templateUrl: 'app/components/sensors/sensorsView.html',
            controller: 'sensorsHumidityController'
        })
        .when('/sensors/light-level', {
            templateUrl: 'app/components/sensors/sensorsView.html',
            controller: 'sensorsLightLevelController'
        })
        .when('/inputs', {
            templateUrl: 'app/components/inputs/inputsView.html',
            controller: 'inputsController'
        })
        .otherwise({
            redirectTo: '/'
        });
});