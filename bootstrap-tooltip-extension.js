/* ===========================================================
 * bootstrap-tooltip-extension.js v0.0.1
 * https://github.com/andresgutgon/bootstrap-tooltip-extension
 * ===========================================================
 *
 * This file extends bootstrap-tooltip.js that add
 * More tooltip positions 'bottom-left', 'bottom-right', 'top-left' and 'top-right'
 *
 * ATENTION:
 * This file is ours, but must be in vendor to be defined before bootstrap-popover.js
 *
 * =========================================================== */

(function ($) {
  var old
    , TooltipExtension = function (element, options) {
    this.init('tooltip', element, options);
  };

  TooltipExtension.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {
    constructor: TooltipExtension
  , show: function () {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp
        , e = $.Event('show');

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) { return; }
        $tip = this.tip();
        this.setContent();

        if (this.options.animation) {
          $tip.addClass('fade');
        }

        placement = typeof this.options.placement === 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement;

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' });

        if (this.options.container) {
          $tip.appendTo(this.options.container);
        } else {
          $tip.insertAfter(this.$element);
        }

        pos = this.getPosition();

        actualWidth = $tip[0].offsetWidth;
        actualHeight = $tip[0].offsetHeight;

        switch (placement) {
        case 'bottom':
          tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2};
          break;
        case 'top':
          tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2};
          break;
        case 'left':
          tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth};
          break;
        case 'right':
          tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width};
          break;
        case 'right':
          tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width};
          break;
        // Extra positions. This are not part of bootstrap
        // Extrange:
        //  I've to make top position 10px smaller in 'top-left' and 'top-right'
        //  And 10px bigger in 'bottom-left' and 'bottom-right'
        // This should behave like 'top' and 'bottom'. But they don't.
        case 'bottom-left':
          tp = {top: pos.top + pos.height + 10, left: pos.left};
          break;
        case 'bottom-right':
          tp = {top: pos.top + pos.height + 10, left: pos.left + pos.width - actualWidth};
          break;
        case 'top-left':
          tp = {top: pos.top - actualHeight - 10, left: pos.left};
          break;
        case 'top-right':
          tp = {top: pos.top - actualHeight - 10, left: pos.left + pos.width - actualWidth};
          break;
        }

        this.applyPlacement(tp, placement);
        this.$element.trigger('shown');
      }
    }
  });



 /* TOOLTIP EXTRA PLUGIN DEFINITION
  * ========================= */

  old = $.fn.tooltip;

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option === 'object' && option;
      if (!data) { $this.data('tooltip', (data = new TooltipExtension(this, options))); }
      if (typeof option === 'string') { data[option](); }
    });
  };

  $.fn.tooltip.Constructor = TooltipExtension;

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  };

 /* TOOLTIP EXTRA NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old;
    return this;
  };

})(window.jQuery);
