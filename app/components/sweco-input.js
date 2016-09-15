import Ember from 'ember';
import FormGroup from '../components/sweco-formgroup';

export default FormGroup.extend({
  classNameBindings: ['submitErrors.model.firstObject:input-error'],
  customClass: 'form-control',
  enabled: true,
  disabled: Ember.computed.not('enabled'),

  validations: {
    model: {
      presence: true
    }
  },

  click: function() {
    if(this.get('type') === 'radio') {
      if(this.get('checked')) {
        this.sendAction('checked', this.get('model'));
      }
    }
  }
});
