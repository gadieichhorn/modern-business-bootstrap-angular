'use strict';

describe('Controller: OtherSidebarCtrl', function () {

  // load the controller's module
  beforeEach(module('modernbusinessApp'));

  var OtherSidebarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OtherSidebarCtrl = $controller('OtherSidebarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
