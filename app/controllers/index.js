import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    openModal: function() {
      this.set('isModalVisible', true);
    },

    closeModal: function() {
      this.set('isModalVisible', false);
    }
  }

});
