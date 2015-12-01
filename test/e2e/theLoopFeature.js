describe('the Loop page', function() {

  var postBox = element(by.model('loopCtrl.title'));
  var linkBox = element(by.model('loopCtrl.link'));
  var postBtn = element(by.className('postBtn'));
  var post = element(by.binding('post.title'));
  var upVote = element(by.id('upVote'));
  var vote = element(by.binding('post.upvotes'));

  beforeEach(function() {
    browser.get('http://localhost:3000');
    postBox.sendKeys('Google');
    linkBox.sendKeys('http://www.google.com/');
    postBtn.click();
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('The Loop!');
  });

  it('can add a post to the page', function() {
    expect(post.getText()).toEqual('Google');
  });

  it('can upvote a post', function() {
    upVote.click();
    expect(vote.getText()).toContain(1);
  });

  it('can post a title and a link', function() {
    expect(post.getAttribute('href')).toEqual('http://www.google.com/');
  });

});
