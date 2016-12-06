import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerbarComponent from './footerbar.component';

let footerbarModule = angular.module('footerbar', [
  uiRouter
])

.component('footerbar', footerbarComponent)

.name;

export default footerbarModule;
