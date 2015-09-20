# angular-pagespeed-insights
AngularJS 1.x service for Google Pagespeed Insights API

#### Docs about Google Pagespeed Insights ####

* https://developers.google.com/speed/docs/insights/v1/getting_started
* https://developers.google.com/speed/pagespeed/insights/

#### Example ####

Just add the service as dependency to your controller and make a call.
You need to obtain an API-key before.

```javascript
NGPagespeedInsights.getSiteInsights('http://example.com', '')
.then(
  function( result ) {
    $scope.result = result;
  }
);
```

#### Demo ####

* http://hello.bnz-power.com/angular-pagespeed-insights
