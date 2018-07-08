'use strict';

module.exports = function (element) {
  var onFieldFocus = function (evt) {
    evt.target.style.border = '1px solid #f0cdd0';
    evt.target.style.outline = 'none';

    element.removeEventListener(focus, onFieldFocus);
  };

  var onFieldBlur = function (evt) {
    evt.target.style.border = '1px solid #ededed';
    element.removeEventListener(focus, onFieldBlur);
  };

  element.addEventListener('focus', onFieldFocus);
  element.addEventListener('blur', onFieldBlur);
};
