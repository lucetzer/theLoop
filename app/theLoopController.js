'use strict';

theLoop.controller('theLoopController', ['$scope', function($scope) {

    var self = this;

    self.posts = [];

    self.addPost = function() {
      if(!self.title || self.title === '') {
        return;
      } else {
        self.posts.push({
          title: self.title,
          link: self.link,
          upvotes: 0
        });
        self.title = '';
        self.link ='';
      }
    };

    self.upVote = function(post) {
      post.upvotes += 1;
    };

  },
]);
