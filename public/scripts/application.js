// Application

$(function () {

	// Browser detection
	$.browserDetection({
	  addClasses: true
	});

	// Tooltip
  $('[data-toggle="tooltip"]').tooltip();

	// Popover
  $('[data-toggle="popover"]').popover();

});