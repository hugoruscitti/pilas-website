import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      version: "1.3.0",
      fecha: "2015-10-19",
      link_mac: "https://dl.dropboxusercontent.com/u/1335422/releases/pilas-engine/1.3.0/pilas-engine-1.3.0.dmg",
      link_windows: "https://dl.dropboxusercontent.com/u/1335422/releases/pilas-engine/1.3.0/pilas-engine_1.3.0.exe",
      link_deb: "http://repo.huayra.conectarigualdad.gob.ar/huayra/pool/main/p/python-pilas/",
    };
  }
});
