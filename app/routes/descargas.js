import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      version: "1.4.0",
      fecha: "2015-12-18",
      link_mac: "http://static.pilas-engine.com.ar/pilas-engine/1.4.0/pilas-engine-1.4.0.dmg",
      link_windows: "http://static.pilas-engine.com.ar/pilas-engine/1.4.0/pilas-engine_1.4.0.exe",
      link_deb: "http://repo.huayra.conectarigualdad.gob.ar/huayra/pool/main/p/python-pilas/",
    };
  }
});
