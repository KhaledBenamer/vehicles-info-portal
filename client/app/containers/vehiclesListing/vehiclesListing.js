import angular from 'angular';
import vehiclesListingComponent from './vehiclesListing.component';
import vehiclesListComponent from '../../components/vehiclesList/vehiclesList';
import vehiclesSearchFormComponent from '../vehiclesSearchForm/vehiclesSearchForm';
let vehiclesListingModule = angular.module('vehiclesListing', [
  vehiclesListComponent,
  vehiclesSearchFormComponent
])

.component('vehiclesListing', vehiclesListingComponent).name;

export default vehiclesListingModule;
