'use strict';

var setFieldFocus = require('./../style/set-field-focus');
var setInputStyle = require('./../style/set-input-style');

module.exports = function (type, placeholder) {
  this.type = type;
  this.placeholder = placeholder;

  Object.defineProperty(this, 'element', {
    get: function () {
      var element = document.createElement('input');

      element.type = this.type;
      element.placeholder = this.placeholder;
      setInputStyle(element);

      return element;
    }
  });
};
