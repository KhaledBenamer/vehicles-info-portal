import angular from 'angular';
import vehiclesListComponent from './vehiclesList.component';
let vehiclesListModule = angular.module('vehiclesList', [
])

.component('vehiclesList', vehiclesListComponent)

.name;

export default vehiclesListModule;
