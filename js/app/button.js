'use strict';

var setButtonStyle = require('./../style/set-button-style');

module.exports = function (props) {
  var MEASURE = 'px';

  this.text = props.text;
  this.type = props.type;
  this.vPadding = (typeof props.vPadding === 'number') ? props.vPadding + MEASURE : props.vPadding;
  this.hPadding = (typeof props.hPadding === 'number') ? props.hPadding + MEASURE : props.hPadding;
  this.minWidth = (typeof props.minWidth === 'number') ? props.minWidth + MEASURE : props.minWidth;

  Object.defineProperty(this, 'element', {
    get: function () {
      var element = document.createElement('button');

      element.textContent = this.text;
      element.style.minWidth = this.minWidth;
      element.style.padding = this.vPadding + ' ' + this.hPadding;

      setButtonStyle(element);

      return element;
    }
  });
};
