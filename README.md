# angular-pagespeed-insights
AngularJS 1.x service for Google Pagespeed Insights API

#### Example ####

Just add the service as dependency to your controller and make a call.

```javascript
NGPagespeedInsights.getSiteInsights('http://example.com', '')
.then(
  function( result ) {
    $scope.result = result;
  }
);
```
