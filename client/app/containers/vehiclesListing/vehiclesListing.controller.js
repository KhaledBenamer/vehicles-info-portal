class vehiclesListingController {
  constructor(vehiclesInfoService) {
  	"ngInject";
  	this.name = 'Vehicles Info. Portal';
    this.vehiclesInfoService = vehiclesInfoService;
    this.vehicles = '';
  }
   /**
    * [$onInit runs after the instantiation of the controller]
    * @return {vehicles Object}
    */
  $onInit(){
    this.vehiclesInfoService.getVehicles({makes: 'Audi', state: 'used', year: '2014'}).then(vehicles => {
        if(vehicles){
          this.readSuccess = true;
          console.log(this.readSuccess);
          this.vehicles = vehicles;
        } else {
          this.readSuccess = false;
        }
      }); 
  }

  /**
   * [vehiclesSearch function]
   * @param  {searchInfo}  [vehicles search object 
   * given by vehicles serach form]
   * @return {sets this.vehicles}    
   */
  vehiclesSearch(searchInfo) {
    this.vehiclesInfoService.getVehicles({makes: searchInfo.model, state: searchInfo.state, year: searchInfo.year}).then(vehicles => {
        if(vehicles){
          this.readSuccess = true;
          console.log(this.readSuccess);
          this.vehicles = vehicles;
        } else {
          this.readSuccess = false;
          console.log(this.readSuccess);
        }
      }); 
  }
}
export default vehiclesListingController;