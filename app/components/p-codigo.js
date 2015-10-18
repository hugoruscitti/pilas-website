import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'pre',

  didInsertElement() {
    Prism.highlightElement(this.$('code')[0]);
  }
});
