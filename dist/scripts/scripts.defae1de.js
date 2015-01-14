navigationModule=angular.module("module.navigation",[]),navigationModule.directive("activeLinkDirective",["$location",function(a){return{restrict:"A",link:function(b,c,d){var e=d.activeLink,f=d.href;f=f.substring(1),b.location=a,b.$watch("location.path()",function(a){f===a?c.addClass(e):c.removeClass(e)})}}}]);var homeModule=angular.module("module.home",[]);homeModule.controller("homeController",["$scope",function(){}]);var sensorsModule=angular.module("module.sensors",[]);sensorsModule.controller("sensorsTemperatureController",["$scope","sensorsService",function(a,b){a.entries=[],a.addUnit=function(a){return a+" C"},b.temperature.getAll().success(function(b){a.entries=b}),a.getCurrentValue=function(){b.temperature.now().success(function(a){alert(a.data)})}}]),sensorsModule.controller("sensorsHumidityController",["$scope","sensorsService",function(a,b){a.entries=[],a.addUnit=function(a){return a+" %"},b.humidity.getAll().success(function(b){a.entries=b}),a.getCurrentValue=function(){b.humidity.now().success(function(a){alert(a.data)})}}]),sensorsModule.controller("sensorsLightLevelController",["$scope","sensorsService",function(a,b){a.entries=[],a.addUnit=function(a){return a},b.lightLevel.getAll().success(function(b){a.entries=b}),a.getCurrentValue=function(){b.lightLevel.now().success(function(a){alert(a.data)})}}]),sensorsModule.factory("sensorsService",["$http","apiBaseUrl",function(a,b){return{temperature:{getAll:function(){return a({method:"GET",url:b+"/sensors/temperature/history"})},now:function(){return a({method:"GET",url:b+"/sensors/temperature/now"})}},humidity:{getAll:function(){return a({method:"GET",url:b+"/sensors/humidity/history"})},now:function(){return a({method:"GET",url:b+"/sensors/humidity/now"})}},lightLevel:{getAll:function(){return a({method:"GET",url:b+"/sensors/light-level/history"})},now:function(){return a({method:"GET",url:b+"/sensors/light-level/now"})}}}}]);var inputsModule=angular.module("module.inputs",[]);inputsModule.controller("inputsController",["$scope","inputsService",function(a,b){a.ledOn=function(){b.led.status(1).success(function(){alert("Done!")})},a.ledOff=function(){b.led.status(0).success(function(){alert("Done!")})}}]),inputsModule.factory("inputsService",["$http","apiBaseUrl",function(a,b){return{led:{status:function(c){return a({method:"GET",url:b+"/inputs/led/"+c})}}}}]);var homeAutomationApp=angular.module("homeAutomationApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","module.navigation","module.home","module.sensors","module.inputs"]);homeAutomationApp.config(["$routeProvider",function(a){a.when("/",{templateUrl:"app/components/home/homeView.html",controller:"homeController"}).when("/sensors/temperature",{templateUrl:"app/components/sensors/sensorsView.html",controller:"sensorsTemperatureController"}).when("/sensors/humidity",{templateUrl:"app/components/sensors/sensorsView.html",controller:"sensorsHumidityController"}).when("/sensors/light-level",{templateUrl:"app/components/sensors/sensorsView.html",controller:"sensorsLightLevelController"}).when("/inputs",{templateUrl:"app/components/inputs/inputsView.html",controller:"inputsController"}).otherwise({redirectTo:"/"})}]),homeAutomationApp.constant("apiBaseUrl","http://home-automation-api.herokuapp.com");