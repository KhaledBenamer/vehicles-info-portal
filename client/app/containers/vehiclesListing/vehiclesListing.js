import angular from 'angular';
import vehiclesListingComponent from './vehiclesListing.component';

let vehiclesListingModule = angular.module('vehiclesListing', [
])

.component('vehiclesListing', vehiclesListingComponent).name;

export default vehiclesListingModule;
