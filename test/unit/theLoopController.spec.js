'use strict';

describe('theLoopController', function() {
  beforeEach(module('theLoop'));

  var ctrl,
  scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('theLoopController', {$scope: scope,
    });
  }));

  it('should add a post', function() {
    ctrl.title = 'hello there';
    ctrl.addPost();
    expect(ctrl.posts[0].title).toEqual('hello there');
  });


});
