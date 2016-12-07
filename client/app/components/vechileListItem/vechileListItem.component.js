import template from './vechileListItem.html';
import controller from './vechileListItem.controller';
import './vechileListItem.scss';

let vechileListItemComponent = {
  restrict: 'E',
  bindings: {
  	vechile: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default vechileListItemComponent;
