class vehiclesListingController {
  constructor(vehiclesInfoService) {
  	"ngInject";
  	this.name = 'Vehicles Info. Portal';
    this.vehiclesInfoService = vehiclesInfoService;
    this.vehicles = '';
  }

  $onInit(){
    this.vehiclesInfoService.getVehicles({makes: 'makes', state: 'used', year: '2014', view: 'basic', fmt: 'json', api_key: 'mnequvu6w5rd2ujk59j794bv'}).then(vehicles => {
        console.log("I got vechiles");
        console.log(vehicles);
        this.vehicles = vehicles;
        console.log(this.vehicles);
      }); 
  }
}
export default vehiclesListingController;