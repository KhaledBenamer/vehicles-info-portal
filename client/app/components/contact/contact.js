import angular from 'angular';
import contactComponent from './contact.component';

let contactModule = angular.module('contact', [])
.component('contact', contactComponent).name;

export default contactModule;
