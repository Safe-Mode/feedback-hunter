'use strict';

var setFieldFocus = require('./../style/set-field-focus');

module.exports = function (element) {
  var select = element.querySelector('select');
  var arrow = element.querySelector('span');
  var optionList = element.querySelectorAll('option');

  element.style.position = 'relative';
  element.style.marginBottom = '20px';
  arrow.style.position = 'absolute';
  arrow.style.top = '50%';
  arrow.style.right = '5px';
  arrow.style.width = '0';
  arrow.style.height = '0';
  arrow.style.border = '5px solid #000000';
  arrow.style.borderBottom = 'none';
  arrow.style.borderRightColor = 'transparent';
  arrow.style.borderLeftColor = 'transparent';
  arrow.style.transform = 'translateY(-50%)';
  select.style.boxSizing = 'border-box';
  select.style.width = '100%';
  select.style.padding = '10px';
  select.style.MozAppearance = 'none';
  select.style.WebkitAppearance = 'none';
  select.style.border = '1px solid #ededed';

  optionList.forEach(function (option) {
    option.style.padding = '0';
  });

  setFieldFocus(select);
};
