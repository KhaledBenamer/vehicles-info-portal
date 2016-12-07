import angular from 'angular';
import vechilesListComponent from './vechilesList.component';
import vechileListItemComponent from '../vechileListItem/vechileListItem';
let vechilesListModule = angular.module('vechilesList', [
  vechileListItemComponent
])

.component('vechilesList', vechilesListComponent)

.name;

export default vechilesListModule;
