import angular from 'angular';
//import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import vehiclesListingComponent from '../../containers/vehiclesListing/vehiclesListing';

let homeModule = angular.module('home', [
	vehiclesListingComponent,
])
.component('home', homeComponent).name;

export default homeModule;
