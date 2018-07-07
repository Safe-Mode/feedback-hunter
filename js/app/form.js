'use strict';

module.exports = function (props) {
  var MEASURE = 'px';

  this.bottom = (typeof props.bottom === 'number') ? props.bottom + MEASURE : props.bottom;
  this.right = (typeof props.right === 'number') ? props.right + MEASURE : props.right;
  this.padding = (typeof props.padding === 'number') ? props.padding + MEASURE : props.padding;
  this.width = (typeof props.width === 'number') ? props.width + MEASURE : props.width;

  Object.defineProperty(this, 'element', {
    get: function () {
      var element = document.createElement('form');

      element.style.position = 'fixed';
      element.style.boxSizing = 'border-box';

      element.style.width = this.width;
      element.style.padding = this.padding;
      element.style.bottom = this.bottom;
      element.style.right = this.right;

      return element;
    }
  });
};
