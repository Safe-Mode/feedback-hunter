'use strict';

var styleField = require('./../style/style-field');
var setInputStyle = require('./../style/set-input-style');

module.exports = function (props) {
  this.type = props.type;
  this.placeholder = props.placeholder;
  this.required = props.required || false;
  this.pattern = props.pattern || '';

  Object.defineProperty(this, 'element', {
    get: function () {
      var field = document.createElement('div');

      styleField(field);

      var element = document.createElement('input');

      element.type = this.type;
      element.placeholder = this.placeholder;
      element.required = this.required;
      element.pattern = this.pattern;
      setInputStyle(element);

      field.appendChild(element);

      return field;
    }
  });
};
