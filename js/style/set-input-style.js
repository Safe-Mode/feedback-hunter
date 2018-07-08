'use strict';

var setFieldFocus = require('./../style/set-field-focus');

module.exports = function (element) {
  element.style.boxSizing = 'border-box';
  element.style.padding = '10px';
  element.style.width = '100%';
  element.style.marginBottom = '20px';
  element.style.border = '1px solid #ededed';

  setFieldFocus(element);
};
