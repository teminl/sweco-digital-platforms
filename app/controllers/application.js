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

    // Datetimepicker
    $(function () {
      $('.datetimepicker').datetimepicker({
        format: 'YYYY-MM-DD',
        icons:
        {
          time: 'fa fa-clock-o',
          date: 'fa fa-calendar',
          up: 'fa fa-angle-up fa-lg',
          down: 'fa fa-angle-down fa-lg',
          previous: 'fa fa-angle-left fa-lg',
          next: 'fa fa-angle-right fa-lg',
          today: 'fa fa-calendar-o',
          clear: 'fa fa-times-circle',
          close: 'fa fa-times-circle'
        }
      });
    });

    // Typeahead.js
    $(function () {
      var demoData = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: 'demo/demo-data.json'
      });
      // Demo
      $('#demo-typeahead .typeahead').typeahead(null, {
        name: 'demoData',
        source: demoData
      });
    });

  }

});
