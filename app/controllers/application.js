import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super();

    $.browserDetection({
      addClasses: true
    });

    // Tooltip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    // Popover
    $(function () {
      $('[data-toggle="popover"]').popover();
    });

    // ProgressJS
    $(function () {
      $('.progressjs-example').click(function() {
        progressJs().start().autoIncrease(1, 100);
        setTimeout(function() {
          progressJs().end();
        }, 5000);
      });
    });

  }

});
