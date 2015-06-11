import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      version: "0.90.36",
      fecha: "2015-06-08",
      link_mac: "https://dl.dropboxusercontent.com/u/1335422/releases/pilas-engine/0.90.36/pilas-engine-0.90.36.dmg",
      link_windows: "https://dl.dropboxusercontent.com/u/1335422/releases/pilas-engine/0.90.36/pilas-engine_0.90.36.exe",
      link_deb: "http://repo.huayra.conectarigualdad.gob.ar/huayra/pool/main/p/python-pilas/",
    };
  }
});
