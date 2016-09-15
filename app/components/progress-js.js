import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['progressjs-navbar'],

  loadingStateChanged: Ember.observer('isLoading', function() {
    if (this.get('isLoading')) {
      progressJs('.progressjs-container').start();
      progressJs('.progressjs-container').autoIncrease(1, 500);
    } else {
      progressJs('.progressjs-container').end();
    }
  }),
});