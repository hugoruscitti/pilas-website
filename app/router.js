import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route("blog");
  this.route("foro");
  this.route("galeria");

  this.resource("videos", {path: '/videos'}, function() {
    this.route('play', {path: '/:video_id'});
  });

  this.route("docs");
  this.route("descargas");
  this.route("acercade");
  this.route("photo-modal");
});

export default Router;
