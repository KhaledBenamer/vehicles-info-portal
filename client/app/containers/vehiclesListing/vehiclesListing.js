import angular from 'angular';
import vehiclesListingComponent from './vehiclesListing.component';
import vehiclesListComponent from '../../components/vehiclesList/vehiclesList';
let vehiclesListingModule = angular.module('vehiclesListing', [
  vehiclesListComponent
])

.component('vehiclesListing', vehiclesListingComponent).name;

export default vehiclesListingModule;
