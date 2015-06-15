'use strict';

describe('Controller: PortfolioPortfolioItemCtrl', function () {

  // load the controller's module
  beforeEach(module('modernbusinessApp'));

  var PortfolioPortfolioItemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioPortfolioItemCtrl = $controller('PortfolioPortfolioItemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
