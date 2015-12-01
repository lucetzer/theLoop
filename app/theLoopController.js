'use strict';

theLoop.controller('theLoopController', ['$scope', function($scope) {

    var self = this;

    self.posts = [];

    self.addPost = function() {
      self.posts.push({title: self.title, upvotes: 0});
      self.title = '';
    }

  },
]);
