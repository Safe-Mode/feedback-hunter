'use strict';

var setMessageStyle = require('./../style/set-message-style');

module.exports = function (placeholder) {
  this.placeholder = placeholder;

  Object.defineProperty(this, 'element', {
    get: function () {
      var element = document.createElement('textarea');

      element.placeholder = this.placeholder;
      setMessageStyle(element);

      return element;
    }
  });
};
