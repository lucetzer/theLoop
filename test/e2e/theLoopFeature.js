describe('the Loop page', function() {

  var postBox = element(by.model('loopCtrl.title'));
  var postBtn = element(by.className('postBtn'));
  var post = element(by.binding('post.title'));

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('The Loop!');
  });

  it('can add a post to the page', function() {
    postBox.sendKeys('hello');
    postBtn.click();
    expect(post.getText()).toContain('hello');
  });

});
