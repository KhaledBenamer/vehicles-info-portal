import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

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
        template: 'Home Paes'
      })

      // Vechiles info search page
      .state('app.search', {
        url: '/search',
        template: 'Vechiles Search page'
      })


      // Vechiles info search page
      .state('app.about', {
        url: '/about',
        template: '<about></about>'
      });


    $urlRouterProvider.otherwise('/app/home');
  })

  .component('app', AppComponent);
