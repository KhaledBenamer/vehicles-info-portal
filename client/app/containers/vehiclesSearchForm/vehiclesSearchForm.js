import angular from 'angular';
import vehiclesSearchFormComponent from './vehiclesSearchForm.component';

let vehiclesSearchFormModule = angular.module('vehiclesSearchForm', [
])

.component('vehiclesSearchForm', vehiclesSearchFormComponent)

.name;

export default vehiclesSearchFormModule;
