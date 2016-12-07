import template from './vechilesListing.html';
import controller from './vechilesListing.controller';
import './vechilesListing.scss';

let vechilesListingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default vechilesListingComponent;
