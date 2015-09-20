/**
* Created by Erik Woitschig on 3/9/15.
* http://www.bnz-power.com
*/

(function(){

var timelineControllers = angular.module('timelineControllers', []);

// example user
timelineControllers.value('user', {
  name: 'bnzlovesyou',
  firstname: '',
  url: 'http://soundcloud.com/bnzlovesyou',
  id: 1672444,
  trackid: 13158665,
  playlistid: 751573,
  groupid: 28743,
  commentid: 211972068
});

timelineControllers.controller('HomeCtrl', ['$scope', '$routeParams', 'SourSound', '$location', 'user',
function($scope, $routeParams, SourSound, $location, user) {

  $scope.project = {
    title: 'SourInsights for Fonpit AG',
  };

  $scope.milestones = [
        {     id    :   1,
              body  : "project started",
              date  : "2015-03-17"
        },
        {     id    :   2,
          body  : "started to add onboarding process",
          date  : "2015-05-20"
        }
        ];
}
]);

timelineControllers.controller('SitesCtrl', ['$scope', '$routeParams', 'SourSound', '$location', 'user', '$timeout',
function($scope, $routeParams, SourSound, $location, user, $timeout) {

  $scope.project = {
    title: 'SourInsights'
  };

  $scope.results = [];

  $scope.sites = [{
    site: 'http://androidpit.de',
    country: 'de',
    sitedata: {}
  },{
    site: 'http://androidpit.com',
    country: 'us',
    sitedata: {}
  },{
    site: 'http://androidpit.com.br',
    country: 'br',
    sitedata: {}
  },{
    site: 'http://androidpit.it',
    country: 'it',
    sitedata: {}
  },{
    site: 'http://androidpit.es',
    country: 'es',
    sitedata: {}
  },{
    site: 'http://androidpit.fr',
    country: 'fr',
    sitedata: {}
  },{
    site: 'http://getpaco.com',
    country: 'paco',
    sitedata: {}
  },{
    site: 'http://appmedia.de',
    country: 'appmedia',
    sitedata: {}
  }
  ];

  var sitelength = $scope.sites.length;

  for (var i = 0; i < sitelength; i++) {
  SourSound.getSiteInsights($scope.sites[i].site, '')
  .then(
    function( friends ) {
      $scope.temp = friends;
      $scope.results.push({
        pageinsights : $scope.temp
      });
    }
  );

  }


  $scope.url = 'http://androidpit.de';
/*
  SourSound.getUser($scope.url, '')
  .then(
    function( friends ) {
      $scope.uservalue = friends;
      console.log(friends);

    }
  );
*/


  $scope.test = function() {

    url = $scope.user.name;
    console.log(url);

    SourSound.getUser(url, '')
          .then(
                function( friends ) {
                  $scope.uservalue = friends;
                }
              );


    };
}]);

timelineControllers.controller('CompetitorCtrl', ['$scope', '$routeParams', 'SourSound', '$location', 'user',
function($scope, $routeParams, SourSound, $location, user) {

  $scope.project = {
    title: 'SourInsights'
  };

  $scope.results = [];

  $scope.sites = [{
    site: 'http://eusouandroid.com',
    region: 'br',
    sitedata: {}
  }  ,{
    site: 'http://www.tecmundo.com.br',
    sitedata: {}
  },{
    site: 'http://showmetech.band.uol.com.br',
    sitedata: {}
  },{
    site: 'http://canaltech.com.br',
    sitedata: {}
  },{
    site: 'https://tecnoblog.net',
    sitedata: {}
  },{
    site: 'http://www.tudocelular.com',
    sitedata: {}
  },{
    site: 'http://www.techtudo.com.br',
    sitedata: {}
  },{
    site: 'http://gizmodo.uol.com.br',
    sitedata: {}
  },{
    site: 'http://olhardigital.uol.com.br/home',
    sitedata: {}
  },{
    site: 'http://phandroid.com',
    sitedata: {}
  },{
    site: 'http://www.androidpolice.com',
    sitedata: {}
  },{
    site: 'http://androidspin.com',
    sitedata: {}
  },{
    site: 'http://www.androidcentral.com',
    sitedata: {}
  },{
    site: 'http://www.androidauthority.com',
    sitedata: {}
  },{
    site: 'http://www.sammobile.com',
    sitedata: {}
  },{
    site: 'http://www.gottabemobile.com',
    sitedata: {}
  },{
    site: 'http://www.androidguys.com',
    sitedata: {}
  },{
    site: 'http://www.techradar.com',
    sitedata: {}
  },{
    site: 'http://www.android-hilfe.de',
    sitedata: {}
  },{
    site: 'http://www.giga.de/androidnews',
    sitedata: {}
  },{
    site: 'https://www.turn-on.de',
    sitedata: {}
  },{
    site: 'http://www.mobilegeeks.de',
    sitedata: {}
  },{
    site: 'https://curved.de',
    sitedata: {}
  },{
    site: 'http://www.chip.de',
    sitedata: {}
  },{
    site: 'http://www.computerbild.de',
    sitedata: {}
  },{
    site: 'http://www.mobiflip.de',
    sitedata: {}
  },{
    site: 'http://www.areamobile.de',
    sitedata: {}
  },{
    site: 'http://www.elandroidelibre.com',
    sitedata: {}
  }
  ];

  var sitelength = $scope.sites.length;

  for (var i = 0; i < sitelength; i++) {
    SourSound.getSiteInsights($scope.sites[i].site, '')
    .then(
      function( friends ) {

        $scope.temp = friends;

        $scope.results.push({
          pageinsights : $scope.temp
        });
      }
    );
  }

$scope.test = function() {

  url = $scope.user.name;
  console.log(url);

  SourSound.getUser(url, '')
  .then(
    function( friends ) {
      $scope.uservalue = friends;
    }
  );


};
}]);

})();
