function VechilesInfoService($q, $http) {
    "ngInject";
    return {
        // Will retrieve our goats list for displaying
        getVechiles() {
        	var deferred = $q.defer(),
        	url = 'https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=2014&view=basic&fmt=json&api_key=mnequvu6w5rd2ujk59j794bv';
            $http({
              method: 'GET',
              url: url
            })
            //.then(response => response.data);
            .then(function successHandler(response) {
                  deferred.resolve(response.data);

             }, function errorHandler() {
                 deferred.resolve(false);
             });

               return deferred.promise;
        },
    }
}

export default VechilesInfoService;