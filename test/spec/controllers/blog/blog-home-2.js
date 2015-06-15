'use strict';

describe('Controller: BlogBlogHome2Ctrl', function () {

  // load the controller's module
  beforeEach(module('modernbusinessApp'));

  var BlogBlogHome2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogBlogHome2Ctrl = $controller('BlogBlogHome2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
