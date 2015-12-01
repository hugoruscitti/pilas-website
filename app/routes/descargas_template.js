import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      version: "VERSION",
      fecha: "FECHA",
      link_mac: "http://static.pilas-engine.com.ar/pilas-engine/VERSION/pilas-engine-VERSION.dmg",
      link_windows: "http://static.pilas-engine.com.ar/pilas-engine/VERSION/pilas-engine_VERSION.exe",
      link_deb: "http://repo.huayra.conectarigualdad.gob.ar/huayra/pool/main/p/python-pilas/",
    };
  }
});
