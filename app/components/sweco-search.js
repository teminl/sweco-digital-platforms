import Ember from 'ember';

export default Ember.Component.extend({
  customClass: 'form-control',

  actions: {
    search: function() {
      var value = this.get('value');
      this.sendAction('search', value);
    },

    clear: function() {
      this.set('value', '');
      this.sendAction('clear');
    }
  }
});
