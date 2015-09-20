/**
* Angular-Pagespeed-Insights
* AngularJS Service for Google Page Insights
*
* Created by Erik Woitschig.
* http://bnz-power.com
* http://twitter.com/devbnz

*/

(function(){


  var insights = angular.module('NGPagespeedInsights', []);

  insights.service("NGPagespeedInsights",
  function( $http, $q) {

    var baseUrl = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=';
    var mobile    = '&strategy=mobile';
    var desktop   = '&strategy=desktop';
    var client_id = '&key=AIzaSyCYwYrQTfWWYknZTnwHNLF0IhyUz-grzUw';

    return({
            getSiteInsights               : getSiteInsights,
            getDesktopSiteInsights        : getDesktopSiteInsights,
            getMobileSiteInsights         : getMobileSiteInsights
    });


function getSiteInsights(url, strategy) {

  strategy = mobile;

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + url + strategy + client_id
  });

  return( request.then( handleSuccess, handleError ) );

}

function getDesktopSiteInsights(url) {

  strategy = desktop;

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + url + strategy + client_id
  });

  return( request.then( handleSuccess, handleError ) );

}

function getMobileSiteInsights(url) {

  strategy = mobile;

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + url + strategy + client_id
  });

  return( request.then( handleSuccess, handleError ) );

}

function handleError( response ) {

  if (
    ! angular.isObject( response.data ) ||
    ! response.data.message
  ) {

    return( $q.reject( "An unknown error occurred." ) );

  }

  return( $q.reject( response.data.message ) );

}

function handleSuccess( response ) {

  return( response.data );

}

}
);


})();
