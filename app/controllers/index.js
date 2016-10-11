import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    // Front-page
    frontPage: function() {
      $('.front-page').fadeOut(200);
      window.scrollTo(0,0);
      $('body').removeClass('body-front-page');
      $('.search').fadeIn(200);
      $('.navbar-south').removeClass('in');
    },

    start: function() {
      $('.front-page').fadeIn(200);
      window.scrollTo(0,0);
      $('body').addClass('body-front-page');
      $('.search').fadeOut(200);
      $('.navbar-south').addClass('in');
    },

    // Modal
    openModal: function() {
      this.set('isModalVisible', true);
    },

    closeModal: function() {
      this.set('isModalVisible', false);
    },

    // Popover
    popover: function() {
      $('.popover-title').append('<button type="button" class="close"><i class="fa fa-times-circle"></i></button>');
      $('.popover .close').click(function() {
        $('.popover').popover('hide');
      });
    }

  }

});
