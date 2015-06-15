'use strict';

/**
 * @ngdoc function
 * @name modernbusinessApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the modernbusinessApp
 */
angular.module('modernbusinessApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
