import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  url: function() {
    var nick = this.get('nick');
    return `./images/tutoriales/${nick}.png`;
  }.property('nick')

});
