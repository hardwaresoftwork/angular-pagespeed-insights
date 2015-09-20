/**
* SOURINSIGHTS
* AngularJS Service for Google Page Insights
*
* Created by Erik Woitschig on 03/07/15.
* http://os.bnz-power.com/sourinsights
* http://twitter.com/devbnz

*/

(function(){


  var soursound = angular.module('SourSound', []);

  soursound.service("SourSound",
  function( $http, $q) {

    var baseUrl = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=';
    var mobile    = '&strategy=mobile';
    var desktop   = '&strategy=desktop';
    var client_id = '&key=AIzaSyCYwYrQTfWWYknZTnwHNLF0IhyUz-grzUw';

    // Return public API.
    return({
            getSiteInsights               : getSiteInsights,
            getDesktopSiteInsights        : getDesktopSiteInsights,
            getMobileSiteInsights         : getMobileSiteInsights,
            getYoutubeChannelStats        : getYoutubeChannelStats
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

function getYoutubeChannelStats(channel) {

  var baseUrl = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forUsername=';
  var chan = channel;
  var apikey = '&key=AIzaSyCYwYrQTfWWYknZTnwHNLF0IhyUz-grzUw';

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + chan + apikey
  });

  return( request.then( handleSuccess, handleError ) );

}

function handleError( response ) {

  // The API response from the server should be returned in a
  // nomralized format. However, if the request was not handled by the
  // server (or what not handles properly - ex. server error), then we
  // may have to normalize it on our end, as best we can.
  if (
    ! angular.isObject( response.data ) ||
    ! response.data.message
  ) {

    return( $q.reject( "An unknown error occurred." ) );

  }

  // Otherwise, use expected error message.
  return( $q.reject( response.data.message ) );

}

function handleSuccess( response ) {

  return( response.data );

}

}
);


})();
