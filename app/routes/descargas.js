import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      version: "0.90.25",
      fecha: "2015-02-16",
      link_windows: "https://dl.dropboxusercontent.com/u/1335422/releases/pilas-engine/0.90.25/pilas-engine-0.90.25.dmg",
      link_mac: "https://dl.dropboxusercontent.com/u/1335422/releases/pilas-engine/0.90.25/pilas-engine_0.90.25.exe",
      link_deb: "http://repo.huayra.conectarigualdad.gob.ar/huayra/pool/main/p/python-pilas/",
    };
  }
});
