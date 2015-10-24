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

  this.route("descargas");
  this.route("acercade");
  this.route("photo-modal");

  this.route('docs', function() {
    this.route('disparar_a_monos');
    this.route('guia_conversion');
  });
});

export default Router;
