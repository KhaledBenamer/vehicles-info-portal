import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import HomeComponent from './pages/home/home';

import vehiclesInfoService from './services/vehiclesInfoService';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    HomeComponent
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";

    // The app routing is defined here. We will keep our layout inside the app component
    // The layout route will be abstract and it will hold all of the views
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        template: '<app><app>'
      }) 

      // Dashboard page to contain our vehicles info. list page
      .state('app.home', {
        url: '/home',
        template: '<home></home>'
      })
      // Vechiles info about page
      .state('app.about', {
        url: '/about',
        template: '<about></about>'
      })
      // Vechiles info contact page
      .state('app.contact', {
        url: '/contact',
        template: '<contact></contact>'
      });


    $urlRouterProvider.otherwise('/app/home');
  })

  .component('app', AppComponent)
  .factory('vehiclesInfoService', vehiclesInfoService);
