import Ember from 'ember';

export function safe(input) {
  return "hola";
}

export default Ember.Handlebars.makeBoundHelper(safe);
