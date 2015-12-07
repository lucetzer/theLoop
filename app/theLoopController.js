'use strict';

theLoop.controller('theLoopController', ['posts', function(posts) {

    var self = this;

    self.posts = posts.posts;

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
