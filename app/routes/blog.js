import Ember from 'ember';


export default Ember.Route.extend({
  model: function() {
    var url = "http://pilas-engine.tumblr.com/api/read/json?callback=c&num=5";

    return Ember.$.getJSON(url).then(function(response) {console.log(response); return response;});
  }
});
