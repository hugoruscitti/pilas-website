import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      version: "1.4.12",
      fecha: "2017-11-23",
      link_mac: "http://static.pilas-engine.com.ar/pilas-engine/1.4.12/pilas-engine-1.4.12.dmg",
      link_windows: "http://static.pilas-engine.com.ar/pilas-engine/1.4.12/pilas-engine_1.4.12.exe",
      link_deb: "http://repo.huayra.conectarigualdad.gob.ar/huayra/pool/main/p/python-pilas/",
    };
  }
});
