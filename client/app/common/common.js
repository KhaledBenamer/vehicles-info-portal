import angular from 'angular';
import Navbar from './navbar/navbar';
import Footerbar from './footerbar/footerbar';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar,
  Footerbar,
  User
])
  
.name;

export default commonModule;
