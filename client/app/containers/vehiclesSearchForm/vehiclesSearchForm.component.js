import template from './vehiclesSearchForm.html';
import controller from './vehiclesSearchForm.controller';
import './vehiclesSearchForm.scss';

let vehiclesSearchFormComponent = {
  restrict: 'E',
  require: {
    'parent': '^vehiclesListing',
  },
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default vehiclesSearchFormComponent;
