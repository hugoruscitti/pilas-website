import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      version: "0.90.33",
      fecha: "2015-05-23",
      link_mac: "https://dl.dropboxusercontent.com/u/1335422/releases/pilas-engine/0.90.33/pilas-engine-0.90.33.dmg",
      link_windows: "https://dl.dropboxusercontent.com/u/1335422/releases/pilas-engine/0.90.33/pilas-engine_0.90.33.exe",
      link_deb: "http://repo.huayra.conectarigualdad.gob.ar/huayra/pool/main/p/python-pilas/",
    };
  }
});
