import Ember from 'ember';

export default Ember.Component.extend({
  safehtml: "",

  didInsertElement() {
    var converter = new showdown.Converter({literalMidWordUnderscores: true});
    var text = this.$('.hidden')[0].innerText;
    this.set('safehtml', converter.makeHtml(text));
  }
});
