'use strict';

/**
 * @ngdoc function
 * @name modernbusinessApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the modernbusinessApp
 */
angular.module('mbApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
