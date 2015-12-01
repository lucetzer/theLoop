'use strict';

describe('theLoopController', function() {
  beforeEach(module('theLoop'));

  var ctrl;
  scope,

  beforeEach(inject(function($controller, $rootScope) {
    ctrl = $controller('theLoopController');
    scope = $rootScope.$new();
  }));
})
