var SourSoundApp = angular.module('SourSoundApp', [
'ngRoute',
'timelineControllers',
'SourSound'
]);

SourSoundApp.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'ng-views/start.html',
    controller: 'HomeCtrl'
  }).
  when('/internalsites', {
    templateUrl: 'ng-views/sites.html',
    controller: 'SitesCtrl'
  }).
  when('/competitors', {
    templateUrl: 'ng-views/sites.html',
    controller: 'CompetitorCtrl'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);
