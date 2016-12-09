import template from './vehiclesListing.html';
import controller from './vehiclesListing.controller';
import './vehiclesListing.scss';

let vehiclesListingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default vehiclesListingComponent;
