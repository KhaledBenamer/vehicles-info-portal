import template from './vechilesList.html';
import controller from './vechilesList.controller';
import './vechilesList.scss';

let vechilesListComponent = {
  restrict: 'E',
  bindings: {
  	vechInfoList: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default vechilesListComponent;
