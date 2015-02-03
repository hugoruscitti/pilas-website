import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("blog");
  this.route("foro");
  this.route("galeria");
  this.route("videos");
  this.route("docs");
  this.route("descargas");
  this.route("acercade");
});

export default Router;
