import angular from 'angular';
import vechileListItemComponent from './vechileListItem.component';

let vechileListItemModule = angular.module('vechileListItem', [])

.component('vechileListItem', vechileListItemComponent)

.name;

export default vechileListItemModule;
