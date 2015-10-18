import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'pre',
  attributeBindings: ['destacar:data-line'],
  classNameBindings: ['enumerar:line-numbers'],

  didInsertElement() {
    Prism.highlightElement(this.$('code')[0]);
  }
});
