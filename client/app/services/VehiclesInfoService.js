function vehiclesInfoService($q, $http) {
    "ngInject";
    return {
        // Will retrieve our goats list for displaying
        getVehicles(params) {
        	var deferred = $q.defer(),
          url= '',
          url2 = 'https://api.edmunds.com/api/vehicle/v2/toyota?state=used&year=2013&view=basic&fmt=json&api_key=mnequvu6w5rd2ujk59j794bv',
          url3 = 'https://api.edmunds.com/api/media/v2/audi/a3/photos?pagenum=1&pagesize=10&view=basic&fmt=json&api_key=z4p2y2wvspm5tt26h9ftustz';
              /*https://api.edmunds.com/api/media/v2/honda/civic/photos?api_key=mnequvu6w5rd2ujk59j794bv&fmt=json*/
    



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

export default vehiclesInfoService;