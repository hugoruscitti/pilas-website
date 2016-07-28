import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      version: "1.4.7",
      fecha: "2016-07-28",
      link_mac: "http://static.pilas-engine.com.ar/pilas-engine/1.4.7/pilas-engine-1.4.7.dmg",
      link_windows: "http://static.pilas-engine.com.ar/pilas-engine/1.4.7/pilas-engine_1.4.7.exe",
      link_deb: "http://repo.huayra.conectarigualdad.gob.ar/huayra/pool/main/p/python-pilas/",
    };
  }
});
