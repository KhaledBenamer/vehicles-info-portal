import angular from 'angular';
import About from './about/about';
import Contact from './contact/contact';

let componentModule = angular.module('app.components', [
  About,
  Contact

]).name;

export default componentModule;
