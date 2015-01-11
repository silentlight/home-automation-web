'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
var homeAutomationApp = angular.module('homeAutomationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',

    'module.navigation',
    'module.home',
    'module.sensors',
]);

