/**
 * [vehiclesInfoService description]
 * @param  {promise} $q    [description]
 * @param  {http service} $http [description]
 * @return {promise}       [description]
 */
function vehiclesInfoService($q, $http) {
    "ngInject";
    var baseUrl = 'https://api.edmunds.com/api/vehicle/v2/',
    apiKey = 'mnequvu6w5rd2ujk59j794bv';
    return {
        // Will retrieve our vehicles list for displaying
        getVehicles(params) {
        	var deferred = $q.defer(), 
          url = baseUrl+params.makes+'?state='+params.state+'&year='+params.year+'&view=basic&fmt=json&api_key='+apiKey;
          console.log("in the Services\n " + url);
          $http({
            method: 'GET',
            url: url 
          })
          .then(function successHandler(response) {
                deferred.resolve(response.data);

           }, function errorHandler() {
               deferred.reject();
           });
            return deferred.promise;
        },
    }
}

export default vehiclesInfoService;