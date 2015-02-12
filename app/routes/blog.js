import Ember from 'ember';


export default Ember.Route.extend({
  model: function() {
    var url = "http://api.tumblr.com/v2/blog/pilas-engine.tumblr.com/posts?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&limit=5";

    return $.getJSON(url).then(function(response) {return response;});
  }
});
