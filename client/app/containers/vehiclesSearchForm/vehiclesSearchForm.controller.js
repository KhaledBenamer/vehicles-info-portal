class VehiclesSearchFormController {
  constructor() {
  	"ngInject"
    this.name = 'vehiclesSearchForm';
    this.vehiclesSearch = {};
  }

  vSearch() {
  	this.parent.vehiclesSearch(this.vehiclesSearch);
  	this.vehiclesSearch = {};
  }
}

export default VehiclesSearchFormController;
