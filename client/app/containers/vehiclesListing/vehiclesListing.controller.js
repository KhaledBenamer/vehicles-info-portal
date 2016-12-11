class vehiclesListingController {
  constructor(vehiclesInfoService) {
  	"ngInject";
  	this.name = 'Vehicles Info. Portal';
    this.vehiclesInfoService = vehiclesInfoService;
    this.vehicles = '';
  }

  $onInit(){
    this.vehiclesInfoService.getVehicles({makes: 'Audi', state: 'used', year: '2014'}).then(vehicles => {
        this.vehicles = vehicles;
      }); 
  }

  vehiclesSearch(searchInfo) {
    return this.vehiclesInfoService.getVehicles({makes: searchInfo.model, state: searchInfo.state, year: searchInfo.year}).then(vehicles => {
        this.vehicles = vehicles;
      }); 
  }
}
export default vehiclesListingController;