/*
 * hotshot
 * https://github.com/vinitkumar/hotshot
 *
 * Copyright (c) 2014 Anit Rai, Vinit Kumar
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.hotshot = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.hotshot = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.hotshot.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.hotshot.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].hotshot = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
