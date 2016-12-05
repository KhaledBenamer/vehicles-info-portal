import angular from 'angular';
import About from './about/about';

let componentModule = angular.module('app.components', [
  About
])
  
.name;

export default componentModule;
