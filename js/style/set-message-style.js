'use strict';

var setFieldFocus = require('./../style/set-field-focus');

module.exports = function (element) {
  element.style.boxSizing = 'border-box';
  element.style.padding = '10px 15px';
  element.style.width = '100%';
  element.style.height = '150px';
  element.style.marginBottom = '10px';
  element.style.resize = 'none';
  element.style.border = '1px solid #ededed';

  setFieldFocus(element);
};
