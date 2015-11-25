import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      version: "1.3.2",
      fecha: "2015-11-04",
      link_mac: "https://dl.dropboxusercontent.com/u/1335422/releases/pilas-engine/1.3.2/pilas-engine-1.3.2.dmg",
      link_windows: "https://dl.dropboxusercontent.com/u/1335422/releases/pilas-engine/1.3.2/pilas-engine_1.3.2.exe",
      link_deb: "http://repo.huayra.conectarigualdad.gob.ar/huayra/pool/main/p/python-pilas/",
    };
  }
});
