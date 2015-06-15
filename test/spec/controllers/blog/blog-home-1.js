'use strict';

describe('Controller: BlogBlogHome1Ctrl', function () {

  // load the controller's module
  beforeEach(module('modernbusinessApp'));

  var BlogBlogHome1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogBlogHome1Ctrl = $controller('BlogBlogHome1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
