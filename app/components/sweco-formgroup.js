import Ember from 'ember';
import FormValidator from '../mixins/form-validator';

export default Ember.Component.extend(FormValidator, {

  classNames: ['form-group'],
  classNameBindings: ['isInputFilled:input-filled'],
  isInputFilled: false,
  inputId: function() {
    return this.get('elementId') + "_input";
  }.property('elementId'),

  hasNoValue: Ember.computed.empty('model'),

  setup: function() {
    if (!Ember.isEmpty(this.get('model'))) {
      this.setClass();
    }
  }.observes('model').on('init'),

  actions: {
    setClass: function() {
      this.setClass();
    },
    removeClass: function() {
      this.removeClass();
    }
  },

  setClass: function() {
    this.set('isInputFilled', true);
  },

  removeClass: function() {
    if (this.get('hasNoValue')) {
      this.set('isInputFilled', false);
    }
  }

});
