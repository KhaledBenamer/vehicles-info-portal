class VehiclesSearchFormController {
  constructor() {
  	"ngInject"
    this.name = 'vehiclesSearchForm';
    this.vehiclesSearch = {};
  }
  /**
   * [vSearch function called on form submit]
   * passes a search objet to the parent.vehiclesSearch function
   */
  vSearch() {
  	this.parent.vehiclesSearch(this.vehiclesSearch);
  	this.vehiclesSearch = {};
  }
}

export default VehiclesSearchFormController;
