import template from './vehiclesList.html';
import controller from './vehiclesList.controller';
import './vehiclesList.scss';

let vehiclesListComponent = {
  restrict: 'E',
  bindings: {
  	vehicles: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default vehiclesListComponent;
