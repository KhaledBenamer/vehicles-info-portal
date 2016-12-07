import angular from 'angular';
//import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import VechListingComponent from '../../containers/vechilesListing/vechilesListing';

let homeModule = angular.module('home', [
	VechListingComponent,
])
.component('home', homeComponent).name;

export default homeModule;
