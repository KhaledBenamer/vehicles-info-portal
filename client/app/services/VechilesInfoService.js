function VechilesInfoService($q, $http) {
    "ngInject";
    return {
        // Will retrieve our goats list for displaying
        getVechiles(params) {
        	var deferred = $q.defer(),
          url= '',
          url2 = 'https://api.edmunds.com/api/vehicle/v2/mazda?state=used&year=2013&view=basic&fmt=json&api_key=mnequvu6w5rd2ujk59j794bv';

          if(params.makes){
        	  url = 'https://api.edmunds.com/api/vehicle/v2/'+params.makes+'?state='+params.state+'&year='+params.year+'&view='+params.view+'&fmt='+params.fmt+'&api_key='+params.api_key;
          }
          //makes?state=used&year=2014&view=basic&fmt=json&api_key=mnequvu6w5rd2ujk59j794bv';
            $http({
              method: 'GET',
              url: url2 
            })
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