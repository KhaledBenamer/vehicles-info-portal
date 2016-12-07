import angular from 'angular';
import vechilesListingComponent from './vechilesListing.component';

let vechilesListingModule = angular.module('vechilesListing', [])

.component('vechilesListing', vechilesListingComponent).name;

export default vechilesListingModule;