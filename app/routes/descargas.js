import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      version: "0.90.10",
      fecha: "Marzo del 2015",
      link_windows: "https://www.dropbox.com/s/wxrnwmzc99rs3eq/pilas-engine_0.90.24.exe?dl=0",
      link_mac: "https://www.dropbox.com/s/2zvuvnhe8ojqbm1/pilas-engine-0.90.24.dmg?dl=0",
      link_deb: "http://repo.huayra.conectarigualdad.gob.ar/huayra/pool/main/p/python-pilas/python-pilas_0.90.23_all.deb",
    };
  }
});
