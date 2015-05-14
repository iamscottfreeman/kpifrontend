/* global API */

API.fetch('posts/1').done(function(data) {
  console.log(data);
}).fail(function() {
  console.log('error');
});