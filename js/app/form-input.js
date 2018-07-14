'use strict';

var styleField = require('./../style/style-field');
var setInputStyle = require('./../style/set-input-style');

module.exports = function (props) {
  this.type = props.type;
  this.placeholder = props.placeholder;
  this.required = props.required;
  this.pattern = props.pattern;

  Object.defineProperty(this, 'element', {
    get: function () {
      var field = document.createElement('div');

      styleField(field);

      var element = document.createElement('input');

      element.type = this.type;

      if (this.placeholder) {
        element.placeholder = this.placeholder;
      }

      if (this.pattern) {
        element.pattern = this.pattern;
      }

      element.required = this.required;
      setInputStyle(element);

      field.appendChild(element);

      return (this.type === 'hidden') ? element : field;
    }
  });
};
